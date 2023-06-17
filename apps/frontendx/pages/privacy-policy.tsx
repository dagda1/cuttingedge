import { ContactDeatils } from '../components/ContactDetails/ContactDetails';
import { FullPageLayout } from '../components/Layouts/FullPageLayout';

export function PrivacyPolicy(): JSX.Element {
  return (
    <FullPageLayout heading="Privacy Policy">
      <p>
        This Privacy Policy governs the manner in which CUTTING-EDGE SOLUTIONS (SCOTLAND) LIMITED collects, uses,
        maintains and discloses information collected from users (each, a &apos;User&apos;) of the{' '}
        <a href="http://frontenddx.com">http://frontenddx.com</a> website (&apos;Site&apos;). This privacy policy
        applies to the Site and all products and services offered by CUTTING-EDGE SOLUTIONS (SCOTLAND) LIMITED.
      </p>{' '}
      <p>Personal identification information</p>{' '}
      <p>
        We may collect personal identification information from Users in a variety of ways, including, but not limited
        to, when Users visit our site, fill out a form, and in connection with other activities, services, features or
        resources we make available on our Site. Users may be asked for, as appropriate, name, email address. Users may,
        however, visit our Site anonymously. We will collect personal identification information from Users only if they
        voluntarily submit such information to us. Users can always refuse to supply personally identification
        information, except that it may prevent them from engaging in certain Site related activities.
      </p>{' '}
      <p>Non-personal identification information</p>{' '}
      <p>
        We may collect non-personal identification information about Users whenever they interact with our Site.
        Non-personal identification information may include the browser name, the type of computer and technical
        information about Users means of connection to our Site, such as the operating system and the Internet service
        providers utilized and other similar information.
      </p>{' '}
      <p>Web browser cookies</p>{' '}
      <p>
        Our Site may use &apos;cookies&apos; to enhance User experience. User&apos;s web browser places cookies on their
        hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set
        their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some
        parts of the Site may not function properly.
      </p>{' '}
      <p>How we use collected information</p>{' '}
      <p>
        CUTTING-EDGE SOLUTIONS (SCOTLAND) LIMITED may collect and use Users personal information for the following
        purposes:
      </p>{' '}
      <ul>
        {' '}
        <li>To improve customer service</li>{' '}
      </ul>{' '}
      <p>
        Information you provide helps us respond to your customer service requests and support needs more efficiently.
      </p>{' '}
      <ul>
        {' '}
        <li>To improve our Site We may use feedback you provide to improve our products and services.</li>{' '}
        <li>
          To send periodic emails We may use the email address to respond to their inquiries, questions, and/or other
          requests. How we protect your information
        </li>{' '}
      </ul>{' '}
      <p>
        We adopt appropriate data collection, storage and processing practices and security measures to protect against
        unauthorized access, alteration, disclosure or destruction of your personal information, username, password,
        transaction information and data stored on our Site.
      </p>{' '}
      <p>Sharing your personal information</p>{' '}
      <p>
        We do not sell, trade, or rent Users personal identification information to others. We may share generic
        aggregated demographic information not linked to any personal identification information regarding visitors and
        users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
      </p>{' '}
      <p>Changes to this privacy policy</p>{' '}
      <p>
        CUTTING-EDGE SOLUTIONS (SCOTLAND) LIMITED has the discretion to update this privacy policy at any time. When we
        do, we will post a notification on the main page of our Site. We encourage Users to frequently check this page
        for any changes to stay informed about how we are helping to protect the personal information we collect. You
        acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware
        of modifications.
      </p>{' '}
      <p>Your acceptance of these terms</p>{' '}
      <p>
        By using this Site, you signify your acceptance of this policy and terms of service. If you do not agree to this
        policy, please do not use our Site. Your continued use of the Site following the posting of changes to this
        policy will be deemed your acceptance of those changes.
      </p>{' '}
      <p>Contacting us</p>{' '}
      <p>
        If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this
        site, please contact us at:
      </p>
      <ContactDeatils />
    </FullPageLayout>
  );
}

export default PrivacyPolicy;
