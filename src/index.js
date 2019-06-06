$(document).ready(function () {
  var campaigns = [
    {
      "date": "2017/05/01",
      "campaign": "Test Whatsapp",
      "view": "View campaign",
      "actions":"Schedule again"
    },
    {
      "date": "2016/04/17",
      "campaign": " 中國哲學書電子化計劃",
      "view": "View campaign",
      "actions":"Schedule again"
    },
    {
      "date": "2016/04/17",
      "campaign": "Super jewels quest",
      "view": "View campaign",
      "actions":"Schedule again"
    },
    {
      "date": "2016/04/14",
      "campaign": "Mole Slayer",
      "view": "View campaign",
      "actions":"Schedule again"
    },
    {
      "date": "2016/04/14",
      "campaign": "Mancala Mix",
      "view": "View campaign",
      "actions":"Schedule again"
    }
  ];
  var calculateDays = function (selectedDate) {
    selectedDate = new Date(selectedDate);
    curDate = new Date();
    var seconds = Math.floor(new Date(curDate - selectedDate)/1000);
    var minutes = Math.floor(seconds/60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);
    return days;
  }

  $('.dp').on('click', function () {
    this.datepicker();
  });

  var dateField = function (selector) {
      return '<div class="col-sm-3">'+selector.date+'<br/>'+calculateDays(selector.date)+' days ago</div>';
  }
  var campaignField = function (selector) {
      return '<div class="col-sm-3">'+selector.campaign+'</div>';
  }
  var viewField = function (selector) {
      return '<div class="col-sm-3 viewDetails">'+selector.view+'</div>';
  }
  var actionsField = function (selector) {
      return '<div class="col-sm-2">'+selector.actions+'<a href="#" class="btn small" id="dp" data-date-format="yyyy-mm-dd" data-date="2012-02-20"><span class="glyphicon glyphicon-calendar" class="scheduleAgain"></span></a></div>';

  }

  for(var i=0; i<campaigns.length; i++) {
    $('#campaignRecords').append('<div class="row record">'+dateField(campaigns[i])+campaignField(campaigns[i])+viewField(campaigns[i])+actionsField(campaigns[i])+'</div>');
  };

   $('.viewDetails').on('click', function () {
     var children = $(this).parent()[0].children, details = [];
     for(var j=0; j<children.length; j++) {
       details.push(children[j].innerHTML);
     }
     $('#myModal .modal-body').html('<div class="row"><label>Date: </label><span>'+details[0]+'</span><br/><label>Campaign: </label><span>'+details[1]+'</span><br/><label>View: </label><span>'+details[2]+'</span><br/><label>Actions: </label><span>'+details[3]+'</span><br/></div>');
     $('#myModal').modal('show');
   });

});
