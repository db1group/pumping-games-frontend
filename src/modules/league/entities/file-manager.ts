export class FileManager {
  async urlToFile(url: string): File {
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], filename, { type: mimeType });
  }
}

