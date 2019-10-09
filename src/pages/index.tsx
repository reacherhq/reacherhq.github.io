import * as React from 'react';

import bulkImage from '../assets/images/undraw_to_do_list.png';
import apiImage from '../assets/images/undraw_code_review.png';
import gdprImage from '../assets/images/undraw_gdpr.png';
import cheaperImage from '../assets/images/undraw_make_it_rain.png';
import accurateImage from '../assets/images/undraw_mail_sent.png';
import assistantImage from '../assets/images/undraw_virtual_assistant.png';
import { Button, Footer, Hero, Navigation, Seo, Card } from '../components';

export default function Index(): React.ReactElement {
  return (
    <>
      <Seo />
      <Navigation />
      <section className="mt-24">
        <Hero />
      </section>
      <section className="container m-auto mt-48 flex flex-row justify-center">
        <Card
          button={<Button priority="secondary">Upload your list</Button>}
          className="p-8 w-400 mr-20"
          description="Say goodbye to invalid email and hard bounces! Create a free account and upload your list of email adresses. In a few seconds you will recieve your verification results!"
          header={
            <span>
              <strong>Bulk</strong> Verification
            </span>
          }
          image={bulkImage}
          size="medium"
        ></Card>
        <Card
          button={<Button priority="secondary">Get your API key</Button>}
          className="p-8 w-400 ml-20"
          description="Add our Real-Time Verification technology on your website by just copying one line of code. It takes only a few seconds and requires no technical skills."
          header={
            <span>
              <strong>API</strong> for Developers
            </span>
          }
          image={apiImage}
          size="medium"
        ></Card>
      </section>
      <section className="card p-2 container mt-48 m-auto flex flex-row justify-around">
        <Card
          className="p-8"
          description={
            <span>
              We never do anything with your data. We don’t store the emails you
              check. We are GDPR compliant. And above all, we’re 100%
              open-source.
            </span>
          }
          header="Totally private"
          image={gdprImage}
          size="small"
        ></Card>
        <Card
          className="p-8"
          description={
            <span>
              If you find a lower priced identical service with a competitor,
              we’ll not only match it, we’ll beat it by 5%.
            </span>
          }
          header="Cheaper than everyone else"
          image={cheaperImage}
          size="small"
        ></Card>
        <Card
          className="p-8"
          description={
            <span>
              We won&apos;t play small, it&apos;s 100%. Real-time verification
              doesn&apos;t use any historical data. We check here and now.
            </span>
          }
          header="Amazing accuracy"
          image={accurateImage}
          size="small"
        ></Card>
        <Card
          className="p-8"
          description={
            <span>
              Chat with us through Live Chat or email, we&apos;re responsive.
              And if you&apos;re unhappywith our service, just let us know and
              we&apos;ll refund you in full.
            </span>
          }
          header="We've got your back"
          image={assistantImage}
          size="small"
        ></Card>
      </section>
      <Footer />
    </>
  );
}
