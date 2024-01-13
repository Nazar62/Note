using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Notes.States
{
    public class RefreshViewState : INotifyPropertyChanged
    {
        public bool IsRefreshing { get; private set; }

        public event PropertyChangedEventHandler PropertyChanged;

        public void SetIsRefreshing(bool Is)
        {
            IsRefreshing = Is;
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(IsRefreshing)));
        }
    }
}
