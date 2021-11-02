using Microsoft.AspNetCore.Mvc;
using Restaurant_Dashboard.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurant_Dashboard.Controllers
{
    [ApiController]
    [Route("api/categories")]
    public class CategoryController : Controller
    {
        ApplicationContext db;
        public CategoryController(ApplicationContext context)
        {
            db = context;
            if (!db.Categories.Any())
            {
                db.Categories.Add(new Category { Name = "без баб", ImgUrl= "https://www.imgonline.com.ua/examples/rose-mini-225.jpg" });
                db.SaveChanges();
            }
        }
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return db.Categories.ToList();
        }

        [HttpGet("{id}")]
        public Category Get(int id)
        {
            Category category = db.Categories.FirstOrDefault(x => x.Id == id);
            return category;
        }

        [HttpPost]
        public IActionResult Post(Category category)
        {
            if (ModelState.IsValid)
            {
                db.Categories.Add(category);
                db.SaveChanges();
                return Ok(category);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(Category category)
        {
            if (ModelState.IsValid)
            {
                db.Update(category);
                db.SaveChanges();
                return Ok(category);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Category category = db.Categories.FirstOrDefault(x => x.Id == id);
            if (category != null)
            {
                db.Categories.Remove(category);
                db.SaveChanges();
            }
            return Ok(category);
        }
    }
}
