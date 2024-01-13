using Notes.States;

namespace Notes
{
    public partial class App : Application
    {
        public App(RefreshViewState refreshViewState)
        {
            InitializeComponent();

            MainPage = new MainPage(refreshViewState);
        }
    }
}
