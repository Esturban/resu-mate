import { Accordion } from "flowbite-react";
import { CheckMark } from "../CheckMark";
export function Component() {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="text-2xl">What can I expect from my purchase?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-lg">
            Resumate is a white glove service for all your resume needs. You'll complete a form that takes 5 minutes which requires:
            <ul>
            <li><CheckMark text={"Current Resume"} /></li>
            <li><CheckMark text={"URL of dream jobs"} /></li>
            <li><CheckMark text={"Your LinkedIn Profile"}/></li>
            </ul>
            We take it from there to get your resume in 48 hours.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-2xl">How long does it take?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-lg">
            We promise to deliver your resume within 48 hours for one-off resumes! For subscriptions, we deliver within 24 hours for those actively seeking, plus a bunch of other perks!
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="text-2xl">What if I don’t have a resume?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          No problem! We’ll gather your info and create a stellar resume from scratch. You don't need an old resume to get started.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
