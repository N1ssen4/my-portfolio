import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
const Projects = () => {
  return (
    <>
      <div className="space-y-4 pt-6 font-Dosis text-white">
        <p className="my-auto text-xl font-bold text-black">
          Below are some of the projects that I have been working. These are
          both some projects from my internship at Dreamplan and also some that
          are made in my freetime. Feel free to check out the code on GitHub.
        </p>
        <div className="pt-6">
          <p className="text-xl font-bold">Property calculator for Dreamplan</p>
          <p>
            A property calculator in danish. Enter your address and it will be
            calculated wheater it makes sense to restructure your current loan.
          </p>
          <div className="flex space-x-4">
            <Image
              src={"/Boligberegner.PNG"}
              height={250}
              width={350}
              alt="Boligberegner"
            />
            <p className="my-auto">
              <SocialIcon
                url="https://dreamplan-bolig-beregning.vercel.app/"
                target="_blank"
              />
            </p>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold">New Profile page for Dreamplan</p>
          <p>
            A rescruture of the current profile page that was in Dreamplan. Here
            we used TRPC and Zod for data retrieval and validation. Also added
            come new features like a recalculation button and some form
            indications so the user knows if the data has been saved correctly.
          </p>
          <div className="flex space-x-4">
            <Image
              src={"/Profilside.PNG"}
              height={250}
              width={350}
              alt="Boligberegner"
            />
            <p className="my-auto">
              <SocialIcon
                url="https://test.dreamplan.io/profile"
                target="_blank"
              />
            </p>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold">Cocktail generator</p>
          <p>
            Search for a specific cocktail or get a random cocktail. Then
            recieve all the necessary information to create your desired
            cocktail.
          </p>
          <div className="flex space-x-4">
            <Image
              src={"/Cocktailgenerator.PNG"}
              height={250}
              width={350}
              alt="Boligberegner"
            />
            <p className="my-auto">
              <SocialIcon
                url="https://madsportfolio-drinkgenerator.netlify.app/"
                target="_blank"
              />
            </p>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold">Watch Collection</p>
          <p>
            Fun little hobby project where I display the watches that I
            currently own aswell as a page for the dream watches that I would
            love in my collection.
          </p>
          <div className="flex space-x-4">
            <Image
              src={"/Watchcollection.PNG"}
              height={250}
              width={350}
              alt="Boligberegner"
            />
            <p className="my-auto">
              <SocialIcon
                url="https://madsportfolio-watchcollection.netlify.app/dreamwatches"
                target="_blank"
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
