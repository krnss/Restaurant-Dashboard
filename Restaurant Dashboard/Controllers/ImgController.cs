using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Restaurant_Dashboard.Logics;
using Restaurant_Dashboard.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Restaurant_Dashboard.Controllers
{
    [ApiController]
    [Route("api/upload")]
    public class ImgController : ControllerBase
    {
        private readonly IFileManagerLogic _fileManagerLogic;

        public ImgController(IFileManagerLogic fileManagerLogic)
        {
            _fileManagerLogic = fileManagerLogic;
        }

        [HttpPost]
        public async Task<IActionResult> Upload([FromForm] FileModel file)
        {
            if (file.ImageFile != null)
            {
                var url = await _fileManagerLogic.Upload(file);
                return Ok(new { imgUrl = url });
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
