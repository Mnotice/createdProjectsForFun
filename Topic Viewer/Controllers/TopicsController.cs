using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ProjectName.Models;

namespace ProjectName.Controllers
{
    public class TopicsController : Controller
    {
        private readonly List<Topic> _topics = new List<Topic>
        {
            new Topic { Id = 1, Name = "Math", Subtopics = new List<string> { "Algebra", "Geometry", "Calculus" } },
            new Topic { Id = 2, Name = "Biology", Subtopics = new List<string> { "Anatomy", "Physiology", "Ecology" } },
            new Topic { Id = 3, Name = "Accounting", Subtopics = new List<string> { "Bookkeeping", "Financial statements", "Auditing" } },
            new Topic { Id = 4, Name = "Animals", Subtopics = new List<string> { "Mammals", "Birds", "Reptiles", "Amphibians", "Fish" } },
            new Topic { Id = 5, Name = "Fruits", Subtopics = new List<string> { "Apples", "Bananas", "Oranges", "Pineapples", "Watermelons" } },
            new Topic { Id = 6, Name = "Humans", Subtopics = new List<string> { "Anatomy", "Physiology", "Psychology", "Sociology" } },
        };

        public IActionResult Get()
        {
            return View(_topics);
        }

        public IActionResult GetById(int id)
        {
            var topic = _topics.FirstOrDefault(t => t.Id == id);
            if (topic == null)
            {
                return NotFound();
            }
            return View(topic);
        }
    }
}
