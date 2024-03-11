export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About CampLink
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            CampLink is a dynamic online platform designed to provide the latest updates and information about colleges and schools within a campus environment. With its user-friendly interface and comprehensive database, CampLink serves as a one-stop hub for students, faculty, and staff to stay informed about campus happenings. Whether it's upcoming events, important announcements, or changes in schedules, CampLink ensures that individuals are always in the loop. 
            </p>
            <p>
            By centralizing communication and streamlining access to pertinent information, CampLink enhances the overall campus experience, fostering a sense of community and connectivity among its users. Whether accessing the site from a desktop or mobile device, users can rely on CampLink to keep them informed and engaged with campus life.
            </p>
            {/* <p>
              Welcome to Sahand's Blog! This blog was created by Sahand Ghavidel
              as a personal project to share his thoughts and ideas with the
              world. Sahand is a passionate developer who loves to write about
              technology, coding, and everything in between.
            </p> */}

            {/* <p>
              On this blog, you'll find weekly articles and tutorials on topics
              such as web development, software engineering, and programming
              languages. Sahand is always learning and exploring new
              technologies, so be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
