namespace Notes.Models
{
    public class NotesSave
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; }
        public string? Description { get; set; }
        public bool? CreatedOffline { get; set; }
        public bool? UpdatedOffline { get; set; }
        public bool? DeleteOffline { get; set;}
    }
}
