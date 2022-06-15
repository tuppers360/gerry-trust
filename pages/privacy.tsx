import Container from 'components/Container';
import HyperLink from 'components/HyperLink';
import PageHeaderSection from 'components/PageHeaderSection';
import React from 'react';

export default function index() {
  return (
    <Container
      title="Privacy Notice - The Gerry Richardson Trust"
      description="You can find our privacy policy here that covers: Privacy &amp; Cookies."
    >
      <PageHeaderSection
        title="Legal"
        heading="Gerry Richardson Trust Privacy Notice"
      >
        Effective 01 January 2021
      </PageHeaderSection>
      <div className="max-w-xl px-4 mx-auto prose sm:px-6 lg:max-w-6xl lg:px-8 dark:prose-invert">
        <div className="flex flex-col lg:flex-row-reverse">
          <section className="w-full p-4 lg:w-1/3 ">
            <h3 className="text-2xl font-semibold">Topics:</h3>
            <ul className="px-6 mt-4 space-y-2 list-disc">
              <HyperLink id="#introduction" name="Introduction" />
              <HyperLink
                id="#what-data-do-we-collect"
                name="What data do we collect?"
              />
              <HyperLink
                id="#how-do-we-collect-your-data"
                name="How do we collect your data?"
              />
              <HyperLink
                id="#how-will-we-use-your-data"
                name="How will we use your data?"
              />
              <HyperLink
                id="#how-do-we-store-your-data"
                name="How do we store your data?"
              />
              <HyperLink
                id="#what-are-your-data-protection-rights"
                name="What are your data protection rights?"
              />
              <HyperLink id="#what-are-cookies" name="What are cookies?" />
              <HyperLink
                id="#how-do-we-use-cookies"
                name="How do we use cookies?"
              />
              <HyperLink
                id="#how-to-manage-your-cookies"
                name="How to manage your cookies"
              />
              <HyperLink
                id="#privacy-policy-of-other-websites"
                name="Privacy policies of other websites"
              />
              <HyperLink
                id="#changes-to-our-privacy-policy"
                name="Changes to our privacy policy"
              />
              <HyperLink
                id="#how-do-we-use-cookies-in-our-services"
                name="How do we use cookies in our services?"
              />
              <HyperLink
                id="#how-do-we-use-cookies-in-our-websites-and-applications"
                name="How do we use cookies in our websites and applications?"
              />
              <HyperLink id="#how-to-contact-us" name="How to contact us" />
              <HyperLink
                id="#how-to-contact-the-appropriate-authority"
                name="How to contact the appropriate authority"
              />
            </ul>
          </section>
          <section className="w-full p-4 space-y-4 lg:w-2/3">
            <h3 className="text-2xl font-semibold" id="introduction">
              Introduction
            </h3>
            <p>
              The Gerry Richardson Trust (“we” or “us” or “our”) respects the
              privacy of our users (“user” or “you”). This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website
              www.gerryrichardsontrust.org, including any other media form,
              media channel, mobile website, or mobile application related or
              connected thereto (collectively, the “Site”). Please read this
              privacy policy carefully. If you do not agree with the terms of
              this privacy policy, please do not access the site.
            </p>
            <p>
              We reserve the right to make changes to this Privacy Policy at any
              time and for any reason. We will alert you about any changes by
              updating the “Last Updated” date of this Privacy Policy. Any
              changes or modifications will be effective immediately upon
              posting the updated Privacy Policy on the Site, and you waive the
              right to receive specific notice of each such change or
              modification.
            </p>
            <p>
              You are encouraged to periodically review this Privacy Policy to
              stay informed of updates. You will be deemed to have been made
              aware of, will be subject to, and will be deemed to have accepted
              the changes in any revised Privacy Policy by your continued use of
              the Site after the date such revised Privacy Policy is posted.
            </p>
            <h3 className="text-2xl font-semibold" id="what-data-do-we-collect">
              What data do we collect?
            </h3>
            <p>We may collect the following data:</p>
            <ul className="px-6 space-y-2 list-disc">
              <li>
                Personally identifiable information, such as your name, email
                address, and telephone number, and demographic information, such
                as your age, gender, hometown, and interests, that you
                voluntarily give to us when you contact us, make an application
                for a grant or make a donation with the Site. You are under no
                obligation to provide us with personal information of any kind,
                however your refusal to do so may prevent you from using certain
                features of the Site.
              </li>
              <li>
                Derivative Data Information our servers automatically collect
                when you access the Site, such as your IP address, your browser
                type, your operating system, your access times, and the pages
                you have viewed directly before and after accessing the Site. If
                you are using our mobile site, this information may also include
                your device name and type, your operating system, your phone
                number, your country, and other interactions with the
                application via server log files, as well as any other
                information you choose to provide.
              </li>
              <li>
                Financial information, such as data related to your payment
                method (e.g. valid credit card number, card brand, expiration
                date) that we may collect when you donate. We store only very
                limited, if any, financial information that we collect.
                Otherwise, all financial information is stored by our payment
                processor, Stripe, and you are encouraged to review their
                privacy policy and contact them directly for responses to your
                questions.
              </li>
              <li>
                Mobile Device information, such as your mobile device ID, model,
                and manufacturer, and information about the location of your
                device, if you access the Site from a mobile device.
              </li>
            </ul>
            <h3
              className="text-2xl font-semibold"
              id="how-do-we-collect-your-data"
            >
              How do we collect your data?
            </h3>
            <p>
              You directly provide us with most of the data we collect. We
              collect data and process data when you:
            </p>
            <ul className="px-6 space-y-2 list-disc">
              <li>Make a donation online.</li>
              <li>
                Complete the contact us form supplying your details for us to
                make contact with you.
              </li>
              <li>
                Complete the application form supplying your details for us to
                consider making a pledge to fund part or all of your fee.
              </li>
              <li>Use or view our website via your browser’s cookies.</li>
            </ul>
            <p>
              We may also receive your data indirectly from the following
              sources:
            </p>
            <ul className="px-6 space-y-2 list-disc">
              <li>
                Third party websites such we use to run and maintain our site
                such as payment processing and email communication.
              </li>
            </ul>
            <h3
              className="text-2xl font-semibold"
              id="how-will-we-use-your-data"
            >
              How will we use your data?
            </h3>
            <p>We collect your data so that we can:</p>
            <ul className="px-6 space-y-2 list-disc">
              <li>
                Process your donation and maintain records for tax purposes as
                dictated by law.
              </li>
            </ul>

            <p>
              When we process your donation, it may send your data to, and also
              use the resulting information from, credit reference agencies to
              prevent fraudulent purchases.
            </p>
            <h3
              className="text-2xl font-semibold"
              id="how-do-we-store-your-data"
            >
              How do we store your data?
            </h3>
            <p>
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of
              misuse. Any information disclosed online is vulnerable to
              interception and misuse by unauthorised parties. Therefore, we
              cannot guarantee complete security if you provide personal
              information.
            </p>
            <p>
              We will keep your Personally identifiable information for a
              minimum of 4 years. Once this time period has expired, we will
              delete your data by [enter how you delete users’ data].
            </p>
            <h3
              className="text-2xl font-semibold"
              id="what-are-your-data-protection-rights"
            >
              What are your data protection rights?
            </h3>
            <p>
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </p>
            <p>
              <strong>The right to access</strong> &#8211; You have the right to
              request copies of your personal data. We may charge you a small
              fee for this service.
            </p>
            <p>
              <strong>The right to rectification</strong> &#8211; You have the
              right to request that we correct any information you believe is
              inaccurate. You also have the right to request we complete the
              information you believe is incomplete.
            </p>
            <p>
              <strong>The right to erasure</strong> – You have the right to
              request that we erase your personal data, under certain
              conditions.
            </p>
            <p>
              <strong>The right to restrict processing</strong> &#8211; You have
              the right to request that we restrict the processing of your
              personal data, under certain conditions.
            </p>
            <p>
              <strong>The right to object to processing</strong> &#8211; You
              have the right to object to our site processing your personal
              data, under certain conditions.
            </p>
            <p>
              <strong>The right to data portability</strong> &#8211; You have
              the right to request that we transfer the data that we have
              collected to another organization, or directly to you, under
              certain conditions.
            </p>
            <p>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us at
              our email:
            </p>
            <p>
              <span className="font-semibold ">Email us at:&nbsp;</span>
              <a
                href="mailto:cotactus@gerryrichardsontrust.org"
                className="text-sky-600 hover:text-sky-800 hover:underline"
              >
                cotactus@gerryrichardsontrust.org
              </a>
            </p>
            <p>
              <span className="font-semibold ">Call us:&nbsp;</span>
              (01253) 700879
            </p>
            <p>
              <span className="font-semibold ">Or write to us at:&nbsp;</span>
              Gerry Richardson Trust Northdene, Stoney Lane, Hambleton,
              Poulton-Le-Fylde, FY6 9AF
            </p>
            <h3 className="text-2xl font-semibold" id="what-are-cookies">
              What are cookies
            </h3>
            <p>
              Cookies are text files placed on your computer to collect standard
              Internet log information and visitor behavior information. When
              you visit our websites, we may collect information from you
              automatically through cookies or similar technology
            </p>
            <p>
              For further information, visit&nbsp;
              <a
                href="www.allaboutcookies.org"
                className="text-sky-600 hover:text-sky-800 hover:underline"
              >
                allaboutcookies.org
              </a>
            </p>
            <h3 className="text-2xl font-semibold" id="how-do-we-use-cookies">
              How do we use cookies?
            </h3>
            <p>
              We use cookies to improve your experience on our website,
              including:
            </p>
            <ul className="px-6 space-y-2 list-disc">
              <li>Understanding how you use our website.</li>
              <li>To enable certain functions of the site.</li>
              <li>To provide analytics.</li>
            </ul>
            <h3
              className="text-2xl font-semibold"
              id="what-type-of-cookies-do-we-use"
            >
              What types of cookies do we use?
            </h3>
            <p>
              There are a number of different types of cookies, however, our
              website uses:
            </p>
            <ul className="px-6 space-y-2 list-disc">
              <li>
                Functionality – Our site uses these cookies so that we recognize
                you on our website and remember your previously selected
                preferences. These could include what language you prefer and
                location you are in. A mix of first-party and third-party
                cookies are used.
              </li>
            </ul>
            <h3 className="text-2xl font-semibold" id="how-to-manage-cookies">
              How to manage cookies
            </h3>
            <p>
              You can set your browser not to accept cookies, and the above
              website tells you how to remove cookies from your browser.
              However, in a few cases, some of our website features may not
              function as a result.
            </p>
            <h3
              className="text-2xl font-semibold"
              id="privacy-policiesof-other-websites"
            >
              Privacy policies of other websites
            </h3>
            <p>
              Our website contains links to other websites. Our privacy policy
              applies only to our site, so if you click on a link to another
              website, you should read their privacy policy.
            </p>
            <h3
              className="text-2xl font-semibold"
              id="changes-to-our-privacy-policy"
            >
              Changes to our privacy policy
            </h3>
            <p>
              We keep our privacy policy under regular review and place any
              updates on this web page. This privacy policy was last updated on
              1 January 2021.
            </p>
            <h3 className="text-2xl font-semibold" id="how-to-contact-us">
              How to contact us
            </h3>
            <p>
              If you have any questions about our privacy policy, the data we
              hold on you, or you would like to exercise one of your data
              protection rights, please do not hesitate to contact us.
            </p>
            <p>
              <span className="font-semibold ">Email us at:&nbsp;</span>
              <a
                href="mailto:cotactus@gerryrichardsontrust.org"
                className="text-sky-600 hover:text-sky-800 hover:underline"
              >
                cotactus@gerryrichardsontrust.org
              </a>
            </p>
            <p>
              <span className="font-semibold ">Call us:&nbsp;</span>
              (01253) 700879
            </p>
            <p>
              <span className="font-semibold ">Or write to us at:&nbsp;</span>
              Gerry Richardson Trust Northdene, Stoney Lane, Hambleton,
              Poulton-Le-Fylde, FY6 9AF
            </p>
            <h3
              className="text-2xl font-semibold"
              id="how-to-contact-the-appropriate-authority"
            >
              How to contact the appropriate authority
            </h3>
            <p>
              Should you wish to report a complaint or if you feel that we have
              not addressed your concern in a satisfactory manner, you may
              contact the Charity Commissioner’s Office.
            </p>
            <p>
              <span className="font-semibold ">Tel:&nbsp;</span>
              0300 066 9197
            </p>
            <p>
              <span className="font-semibold ">Website:&nbsp;</span>
              <a
                href="https://www.gov.uk/complain-about-charity"
                className="text-sky-600 hover:text-sky-800 hover:underline"
              >
                Charity Commision
              </a>
            </p>
            <p>
              <span className="font-semibold ">Address:&nbsp;</span>
              Charity Commission PO Box 211 Bootle L20 7YX
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
}
