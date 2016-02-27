/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 <!DOCTYPE html>
<head>

  <meta charset="utf-8">
  <title>danish o'habib resume</title>
  <link href="css/style.css" rel="stylesheet">
  <script src="js/jQuery.js"></script>
  <script src="js/helper.js"></script>

  <!--
  Uncomment the <script> tag below when you're ready to add an interactive
  Google Map to your resume!
  -->
<!-- <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places"></script> -->

  <meta name="viewport" content="width=device-width">
</head>
<body>
  <div id="main">
    Hello world!   <!-- You'll be deleting this line in the course -->

    <!--
    Everything from here to the <script> tag below is the skeleton of your
    website. Your code will add information to each of the sections of the
    resume below. You can pretty easily figure out what each section will
    display by looking at the id or at what's written between the <h2> tags.
    -->
    <div id="header" class="center-content clear-fix">
      <ul id="topContacts" class="flex-box"></ul>
    </div>
    <div style="clear: both;"></div>
    <div id="workExperience" class="gray">
      <h2>Work Experience</h2>
    </div>
    <div id="projects">
      <h2>Projects</h2>
    </div>
    <div id="education" class="gray">
      <h2>Education</h2>
    </div>
    <div id="mapDiv">
      <h2>Where I've Lived and Worked</h2>
    </div>
    <div id="lets-connect" class="dark-gray">
      <h2 class="orange center-text">Let's Connect</h2>
        <ul id="footerContacts" class="flex-box">
      </ul>
    </div>
  </div>

  <!--
  The next line tells the browser where to download the JavaScript file you'll be
  writing. In resumeBuilder.js, you'll be writing code that builds the resume
  dynamically when this website, index.html, is opened.
  -->
  <script src="js/resumeBuilder.js"></script>


  <!--
  These scripts are written in JavaScript. You'll be breaking them down as part of
  a quiz. Essentially, the next few lines are checking to see if you have not
  changed each section of the resume. If you have not made any changes to a section
  of the resume, then that part of the resume does not show up. More on this in the
  course.
  -->

  <script type="text/javascript">
    // Notice how all of a sudden there's JavaScript inside this HTML
    // document? You can write JavaScript between <script> tags. At the end of your
    // JavaScript, don't forget the closing script tag with the slash (/).
    // Also, this is a JavaScript style comment. You can comment in JavaScript with:
    //   two slashes for all following characters on a single line, or
    /*
        an opening and closing set of slash asterisks for block comments.
    */
    if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('topContacts').style.display = 'none';
    }
    if(document.getElementsByTagName('h1').length === 0) {
      document.getElementById('header').style.display = 'none';
    }
    if(document.getElementsByClassName('work-entry').length === 0) {
      document.getElementById('workExperience').style.display = 'none';
    }
    if(document.getElementsByClassName('project-entry').length === 0) {
      document.getElementById('projects').style.display = 'none';
    }
    if(document.getElementsByClassName('education-entry').length === 0) {
      document.getElementById('education').style.display = 'none';
    }
    if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('lets-connect').style.display = 'none';
    }
    if(document.getElementById('map') === null) {
      document.getElementById('mapDiv').style.display = 'none';
    }
  </script>
</body>
</html>
