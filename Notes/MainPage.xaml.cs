using Microsoft.AspNetCore.Components;
using Notes.States;
using System.Windows.Input;

namespace Notes
{
    public partial class MainPage : ContentPage
    {
        [Inject]
        public RefreshViewState RefreshViewState { get; set; }
        public MainPage(RefreshViewState vm)
        {
            InitializeComponent();
            if (DeviceInfo.Platform == DevicePlatform.Android || DeviceInfo.Platform == DevicePlatform.iOS)
            {
                RefreshView refreshView = new RefreshView();
                ICommand refreshCommand = new Command(() =>
                {
                    // IsRefreshing is true
                    // Refresh data here
                    vm.SetIsRefreshing(true);
                });
                refreshView.Command = refreshCommand;
                refreshView.SetBinding(RefreshView.IsRefreshingProperty, new Binding("IsRefreshing", source: RefreshViewState));

                refreshView.Content = blazorWebView;

                Content = refreshView;
            }
            this.BindingContext= vm;
            RefreshViewState = vm;
        }

    }
}
