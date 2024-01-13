using System.ComponentModel.DataAnnotations;

namespace Notes.Models.Request
{
    public class ResetPasswordRequest
    {
        [Required]
        public string token { get; set; }
        [Required]
        public string NewPassword { get; set; }
    }
}
