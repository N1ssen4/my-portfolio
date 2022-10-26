import { NextPage } from "next";
import Contact from "../components/contact/Contact";

const ContactPage: NextPage = () => {
  return (
    <>
      <main className="min-h-screen items-center justify-center p-4 lg:px-40 xl:px-96">
        <div className="static h-full overflow-y-auto pt-12 pb-12">
          <div className="mx-8 space-y-8 md:mx-20">
            <Contact
              SOME={[
                {
                  SOMEtitle: "Facebook",
                  SOMElink: "https://www.facebook.com/madsrn/",
                },
                {
                  SOMEtitle: "LinkedIn",
                  SOMElink:
                    "https://www.linkedin.com/in/mads-rosenlund-nissen-8472371b8/",
                },
                {
                  SOMEtitle: "Github",
                  SOMElink: "https://github.com/N1ssen4",
                },
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
};
export default ContactPage;
