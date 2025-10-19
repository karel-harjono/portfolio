export function getDriveImageUrl(url: string): string {
  // Check if it's already a direct Google Drive view/download URL
  if (url.includes("drive.google.com/uc?") || url.includes("drive.google.com/thumbnail?")) {
    return url;
  }

  // Handle different Google Drive URL formats
  let fileId = "";

  // Format: https://drive.google.com/file/d/{fileId}/view
  if (url.includes("/file/d/")) {
    fileId = url.split("/file/d/")[1].split("/")[0];
  }
  // Format: https://drive.google.com/open?id={fileId}
  else if (url.includes("?id=")) {
    fileId = url.split("?id=")[1].split("&")[0];
  }
  // Format: https://drive.google.com/drive/u/0/folders/{folderId}
  else if (url.includes("/folders/")) {
    fileId = url.split("/folders/")[1].split("?")[0].split("/")[0];
  }

  if (!fileId) {
    return url; // Return original URL if not a Google Drive URL
  }

  // Return direct access URL
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}
