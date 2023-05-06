const snyderPic = require('./images/Chris.jpg')

export default function About() {
  return (
<div className="container">
<img src={snyderPic} height={160} width={160} alt="Chris-Avatar" className="chrisPic" />
<p style={{fontWeight: 'bold'}}>
        
Hello, my name is Christopher Snyder, and I'm a Full Stack Web Developer based in Western North Carolina. After working in emergency services for the last ten years, I've decided to pursue a career in web development. I am currently enrolled in UNC Charlotte's Coding Bootcamp, where I am learning various web development technologies such as HTML, CSS, JavaScript, React, Node.js, Express, MySQL, and MongoDB.<br></br><br></br>
I specialize in building dynamic web applications with responsive design and user-friendly interfaces. In my portfolio, you will find a showcase of my work, including projects that utilize both SQL and NoSQL databases such as MySQL and MongoDB.  One of my recent projects involved building a blood donation website using Node.js, and MongoDB. My group and I created a RESTful API with Express and integrated it with a Handlebars front-end, allowing users to create profiles, update profile information, and schedule a blood donation in real-time.
<br></br><br></br>
I am passionate about learning new technologies and staying up-to-date with the latest trends in web development. If you're looking for a full-stack web developer, feel free to contact me.

</p>
</div>
  );
}