using Azure.Storage.Blobs;
using Restaurant_Dashboard.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurant_Dashboard.Logics
{
    public class FileManagerLogic : IFileManagerLogic
    {
        private readonly BlobServiceClient _blobServiceClient;
        public FileManagerLogic(BlobServiceClient blobServiceClient)
        {
            _blobServiceClient = blobServiceClient;
        }

        public async Task<string> Upload(FileModel model)
        {
            string fileName = DateTime.UtcNow.ToString() + model.ImageFile.FileName;

            var blobContainer = _blobServiceClient.GetBlobContainerClient("upload-file");

            var blobClient = blobContainer.GetBlobClient(fileName);

            await blobClient.UploadAsync(model.ImageFile.OpenReadStream());

            return blobClient.Uri.AbsoluteUri;
        }
    }
}
