import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavoriteProjects from "./../components/FavoriteProjects";
import LatestCode from "./../components/LatestCode";
import Hero from "./../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";


export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Mark P.Olivo - Software Developer, Writer, Creator"
      description=" Creating a developer portfolio that gets you a job."
    >
      <Head />
      <Hero />
      <FavoriteProjects />
      <LatestCode repositories={repositories} />
     
     
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN)
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};

    
function validate(contact){
  var name = document.getElementsByName('name')[0].value;
  // You can also do the following
  // var name = document.getElementById('name').value;
  // var name = document.forms['contact'].elements['name'].value;

  var email = document.getElementsByName('email')[0].value;
  var message = document.getElementsByName('message')[0].value;

  if (name.length == 0 || name.length > 200)
  {
    alert ("You must enter a name.");
    return false;
  }

  if (email.length == 0 || email.length > 200)
  {  
     alert ("You must enter a email.");
     return false;
  }

 if (message.length == 0)
 {  
   alert ("You must enter a message.");
   return false;
 }

 return true;
}
