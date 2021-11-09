using Restaurant_Dashboard.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurant_Dashboard.Logics
{
    public interface IFileManagerLogic
    {
        Task<string> Upload(FileModel model);
    }
}
