using System.Collections.Generic;

namespace ProjectName.Models
{
    public class Topic
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<string> Subtopics { get; set; }
    }
}
