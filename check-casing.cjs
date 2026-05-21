const fs = require('fs');
const path = require('path');

function checkDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            checkDirectory(fullPath);
        } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
            checkFile(fullPath);
        }
    }
}

function checkFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const importRegex = /import\s+.*?from\s+['"]([^'"]+)['"]/g;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
        const importPath = match[1];
        if (importPath.startsWith('.')) {
            const resolvedPath = path.resolve(path.dirname(filePath), importPath);
            checkExistsCaseSensitive(resolvedPath, importPath, filePath);
        }
    }
}

function checkExistsCaseSensitive(resolvedPath, originalImport, sourceFile) {
    const dir = path.dirname(resolvedPath);
    const base = path.basename(resolvedPath);
    
    if (!fs.existsSync(dir)) return; // Directory doesn't exist, let normal build catch it
    
    // We need to check if base exists with exact casing
    // It might have extensions omitted (.jsx, .js, .css, etc)
    const extensions = ['', '.js', '.jsx', '.ts', '.tsx', '.css'];
    let found = false;
    let exactMatch = false;
    let actualName = null;

    const filesInDir = fs.readdirSync(dir);
    
    for (const ext of extensions) {
        const target = base + ext;
        const lowerTarget = target.toLowerCase();
        
        for (const f of filesInDir) {
            if (f.toLowerCase() === lowerTarget) {
                found = true;
                if (f === target) {
                    exactMatch = true;
                } else {
                    actualName = f;
                }
            }
        }
    }
    
    if (found && !exactMatch) {
        console.error(`Case mismatch in ${sourceFile}:`);
        console.error(`  Imported: '${originalImport}'`);
        console.error(`  Actual file: '${actualName}'`);
    }
}

checkDirectory('./src');
console.log('Casing check complete.');
