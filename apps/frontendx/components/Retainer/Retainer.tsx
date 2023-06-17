import { Heading } from '@cutting/component-library';
import { Service } from '../Services/Service';
import { Testimonial } from '../Testimonial/Testimonial';
import { Text } from '@cutting/component-library';

export function Retainer(): JSX.Element {
  return (
    <Service heading="Frontend On Demand" callType="one-shot-migration">
      <Testimonial>
        <Text component="p">We believe in teaching developers how to be productive.</Text>
        <Text component="p">
          One of our frustrations with what we have seen in the field is when consultants roll on to a contract and
          leave less experienced development teams with a complicated code base that they did not write and don&apos;t
          know how to maintain.
        </Text>
      </Testimonial>
      <Heading level="2">Are your team lacking frontend development experience?</Heading>
      <Text component="p">
        Are your development team more accustomed to backend development than frontend development?
      </Text>
      <Text component="p">
        Does your development team struggle to create responsive HTML and CSS that is responsive on many devices?
      </Text>
      <Text component="p">
        Are you working on a time-critical piece of work that is getting dragged down by a lack of frontend knowledge?
      </Text>
      <Text component="p">Are you concerned about how long frontend features are taking to complete?</Text>
      <Text component="p">
        Are you lost in the vast maze of choice and complexity that exits in frontend development?
      </Text>
      <Heading level="2">We are the frontend development experience your team needs</Heading>
      <Text component="p">
        We supply a <strong>frontend on demand service</strong> if you would like to 10x your development team&apos;s
        frontend experience.
      </Text>
      <Heading level="2">Would your team benefit from:</Heading>
      <ul>
        <li>A frontend expert on hand to brainstorm problems</li>
        <li>The safety of knowing that what they are doing is the right choice</li>
        <li>Learning how to create reusable components</li>
        <li>Learning how to create responsive html that looks great on any device</li>
        <li>Learning how to write tests that stop bugs before they happen</li>
        <li>Knowing which framework or tool is the right choice for your situation</li>
      </ul>
      <Heading level="2">Take the risk out of frontend development</Heading>
      <Text component="p">What you get:</Text>
      <ul>
        <li>Scheduled strategy calls to brainstorm and assess current problems as they arise.</li>
        <li>Pair programming sessions to unblock problems</li>
        <li>
          Code review and pull request review. We take code reviews very seriously and find emailing team members a git
          diff as a pull request a bit of an antipattern.
        </li>
        <li>A dedicated Slack channel for 24/7 asynchronous discussion.</li>
      </ul>
    </Service>
  );
}
