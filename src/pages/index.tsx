import React from 'react';

import apiImage from '../assets/images/undraw_code_review.svg';
import gdprImage from '../assets/images/undraw_gdpr.svg';
import accurateImage from '../assets/images/undraw_mail_sent.svg';
import cheaperImage from '../assets/images/undraw_make_it_rain.svg';
import bulkImage from '../assets/images/undraw_to_do_list.svg';
import assistantImage from '../assets/images/undraw_virtual_assistant.svg';
import {
  Button,
  Card,
  CompareTable,
  EmailLine,
  Footer,
  Hero,
  Line,
  Navigation,
  Seo
} from '../components';
import { Auth0Value } from '../context/Auth0Context';

function LineBetweenValues(): React.ReactElement {
  return <Line className="mt-20 h-8" />;
}

export default function Index(): React.ReactElement {
  // TODO Unimplemented for now, mocking auth0 object
  const auth0 = { isAuthenticated: false } as Auth0Value;

  return (
    <>
      <Seo />
      <Navigation auth0={auth0} />
      <EmailLine className="-mx-2" />
      <section className="container mx-auto px-12 my-24">
        <Hero className="z-10" />
      </section>
      <section className="container mx-auto px-12 py-48">
        <div className="flex flex-row justify-center" id="services">
          <Card className="mr-20" size="medium">
            <Card.Content
              button={
                <a
                  href="https://mailchi.mp/12f6e32e376d/reacher"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button className="w-full" priority="secondary">
                    Upload your list
                  </Button>
                </a>
              }
              description="Say goodbye to invalid email and hard bounces! Create a free account and upload your list of email adresses. In a few seconds you will recieve your verification results!"
              header={
                <span>
                  <strong>Bulk</strong> Verification
                </span>
              }
              image={bulkImage}
            ></Card.Content>
          </Card>
          <Card className="ml-20" size="medium">
            <Card.Content
              button={
                <a
                  href="https://mailchi.mp/12f6e32e376d/reacher"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button className="w-full" priority="secondary">
                    Get your API key
                  </Button>
                </a>
              }
              description="Add our Real-Time Verification technology on your website by just copying one line of code. It takes only a few seconds and requires no technical skills."
              header={
                <span>
                  <strong>API</strong> for Developers
                </span>
              }
              image={apiImage}
            ></Card.Content>
          </Card>
        </div>
      </section>
      <section className="container mx-auto px-12 py-48">
        <Card className="px-8 py-6 flex flex-row justify-around" id="values">
          <Card.Content
            className="flex-1"
            description={
              <span>
                We never do anything with your data. We don’t store the emails
                you check. We are GDPR compliant. And above all, we’re 100%
                open-source.
              </span>
            }
            header={
              <span>
                Totally
                <br />
                private
              </span>
            }
            image={gdprImage}
            size="small"
          ></Card.Content>
          <LineBetweenValues />
          <Card.Content
            className="flex-1"
            description={
              <span>
                If you find a lower-priced identical service with a competitor,
                we’ll not only match it, we’ll beat it by 5%.
              </span>
            }
            header={
              <span>
                Cheaper than
                <br />
                everyone else
              </span>
            }
            image={cheaperImage}
            size="small"
          ></Card.Content>
          <LineBetweenValues />
          <Card.Content
            className="flex-1"
            description={
              <span>
                We won&apos;t play small, it&apos;s 100%. Real-time verification
                doesn&apos;t use any historical data. We check here and now.
              </span>
            }
            header={
              <span>
                Amazing
                <br />
                accuracy
              </span>
            }
            image={accurateImage}
            size="small"
          ></Card.Content>
          <LineBetweenValues />
          <Card.Content
            className="flex-1"
            description={
              <span>
                Chat with us through Live Chat or email, we&apos;re responsive.
                And if you&apos;re unhappy with our service, just let us know
                and we&apos;ll refund you in full.
              </span>
            }
            header={
              <span>
                We&apos;ve got
                <br />
                your back
              </span>
            }
            image={assistantImage}
            size="small"
          ></Card.Content>
        </Card>
      </section>
      <section className="container mx-auto px-4 py-48">
        <CompareTable id="what-we-check" />
      </section>
      <Footer className="mt-24 px-12 pt-24" />
    </>
  );
}
