$(document).ready(function () {
  $(".MoreInfo").click(function () {
    let parentCard = $(this).closest(".event-card");
    let eventInfo = parentCard.find(".event-info");

    if (eventInfo.length === 0) {
      let content = $(`
        <div class="additional-content">
          <div class="event-info">
            <h3>Event Information:</h3>
            <ul>
              <li>
                <img src="img/DateIcon.png" alt="">
                Date 
                <span>26/08/2024</span>
              </li>
              <li>
                <img src="img/TimeIcon.png" alt="">
                Start Time 
                <span>10.00am</span>
              </li>
              <li>
                <img src="img/TopicsIcon.png" alt="">
                Topics 
                <span>12</span>
              </li>
              <li>
                <img src="img/QuizzesIcon.png" alt="">
                Quizzes 
                <span>145</span>
              </li>
              <li>
                <img src="img/CertificateIcon.png" alt="">
                Certifications 
                <span>Yes</span>
              </li>
              <li>
                <img src="img/StudentIcon.png" alt="">
                Total Seat 
                <span>300</span>
              </li>
            </ul>
          </div>
          
          <div class="secure-payment">
            <h3>Secure Payment:</h3>
            <img src="https://s3-alpha-sig.figma.com/img/6cce/14a6/fef39893ffec7aceae284a74f5721102?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OHHS-XrjWgVTiRbUKyHD1tR-kJdj39he0aCwXvICx-xwk-tdLwUM3dGttjKxYcZNuCWmmfLxTcjH-nE~gpb0PXmGOZScCwx3HZzSXtD7FYAN1mNivtfFetkqlOl0k~qjFOwpqK5eGtmFjiug7Qemac26wVY22azg76e0loBXS1txdpRMHIyqRYTXzbryXGJZmfxD9eCbJdZeXd972OaWMEQr03DmdrNiii7Yw0ZLD~9tPpQ3dUwz1fu57NYrDQKXfINqDY3FYWBPcpkGZ9-Rli~44rAqvjWbhT6Yl7PTeYlKv4UMgC59dwlk~bCZh5PWjRTED67qd2sN6KUMlK7liw__" alt="Payment options">
          </div>
          
          <div class="share-course">
            <h3>Share this course:</h3>
            <div class="socialIcons">
              <div>
                <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
              </div>
              <div>
                <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
              </div>
              <div>
                <a href="https://whatsapp.com" target="_blank"><i class="fab fa-whatsapp"></i></a>
              </div>
              <div>
                <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
              </div>
              <div>
                <a href="https://youtube.com" target="_blank"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          
          <button class="join-event">Join This Event →</button>
        </div>
      `);

      content.hide();
      parentCard.append(content);
      content.slideDown();
      $(this).html("Less Information &#11161;");
      
    } else {
      parentCard.find(".additional-content").slideUp(function () {
        $(this).remove()
      })

      $(this).html("More Information &#11163;");
    }
  });
});

  