﻿using System.Collections.Generic;

namespace Restaurant_Dashboard.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public string ImgUrl { get; set; }
        public List<Category> Categories { get; set; }
    }
}
