import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Footer from "../Footer/Footer";

const About = () => {
  const { safkat } = useContext(AuthContext);
  console.log(safkat);
  return (
    <div>
      <p className="text-6xl font-bold my-10 text-center">About Us</p>
      <div>
      <img className="w-[800px] h-[800px] mx-auto mb-5"  src='https://upload.wikimedia.org/wikipedia/commons/1/19/John_Petrucci_-_04e.jpg' alt="" />
      </div>
      <div className="max-w-7xl font-mono text-2xl font-bold mx-auto min-h-screen">
      Welcome to a Petrucci Music, a crescendo of melodies, and a harmonious
      journey through the world of music. Our website is your portal to a
      magical realm where music transcends boundaries, where notes and rhythms
      weave stories, and where every beat resonates with the pulse of life. Step
      into a world where melodies are born and dreams take flight. Our music
      event website is your gateway to an enchanting universe of rhythm and
      emotion. Here, we celebrate the universal language that unites us all -
      music. Discover a tapestry of genres that cater to every musical palate.
      From the soul-stirring strains of classical compositions to the infectious
      rhythms of contemporary hits, we curate an eclectic selection that
      promises something for everyone. Dive into the depths of jazz, rock to the
      core, or sway to the beats of world music; our website is your compass to
      navigate this diverse landscape. But it's not just about the music; it's
      about the experience. Join us on a visual journey as we capture the
      essence of each event in stunning photographs and videos. Feel the energy,
      the passion, and the camaraderie that music fosters. Stay in the loop with
      our event calendar, ensuring you never miss a chance to witness your
      favorite artists live in action. Dive into artist profiles and interviews,
      gaining insight into the minds and hearts behind the music. Connect with
      fellow music enthusiasts, share your thoughts, and be part of a thriving
      community that speaks the language of melody. Whether you're a seasoned
      music aficionado or just dipping your toes into the vast ocean of sound,
      our website welcomes you with open arms. Let us be your guide, your
      companion, and your source of inspiration in this enchanting journey of
      music. Join us as we celebrate the power of music to move our souls, bring
      us together, and elevate our spirits. Welcome to a world where every note
      is a brushstroke on the canvas of life. Welcome to our music event
      website, where the magic of music knows no bounds.
    </div>
    <Footer></Footer>
    </div>
  );
};

export default About;
