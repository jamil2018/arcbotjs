import fs from 'fs'
import path from 'path'

const getAllTestFiles = (
  dirPath?: string,
  arrayOfFiles: string[] = []
): string[] => {
  if (dirPath === undefined) return []

  const files = fs.readdirSync(dirPath)
  files.forEach(function (file) {
    const pathDir = path.join(dirPath, file)
    if (fs.statSync(pathDir).isDirectory()) {
      arrayOfFiles = getAllTestFiles(pathDir, arrayOfFiles)
    }
    if (path.extname(file) === '.ts') {
      arrayOfFiles.push(pathDir)
    }
  })

  return arrayOfFiles
}

export { getAllTestFiles }
