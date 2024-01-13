using System.ComponentModel.DataAnnotations;

namespace Notes.Models.Request
{
    public class UserLoginRequest
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
