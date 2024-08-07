import React from "react";
import "./Sell.css";
import { Link } from "react-router-dom";

const Sell = () => {
  return (
    <div className="sell">
      <div className="d-flex links">
        {" "}
        <Link to="/">Home</Link>
        <span className="sp px-4">/</span>
        <Link to="#">Selling Art</Link>
      </div>
      <div className="d-flex headlist py-3">
        <h1 className="text-light">Selling Art on Aicoaster.com</h1>
      </div>
      <h3 className="py-5">Quickstart</h3>
      <div className="row pb-4">
        <div className="col-md-4 d-reg col-reg d-block">
          <h4 className="reg-h">1. Register</h4>
          <div className="flex pb-1">
            <button className="bt-reg">Artist Registration</button>
          </div>
          <p>Registration help</p>
          <p>(Existing members, please create a new account)</p>
        </div>
        <div className="col-md-4 d-reg col-reg d-block">
          <h4 className="reg-h">2.Subscribe</h4>
          <div className="flex pb-1">
            <button className="bt-reg">Subscribe</button>
          </div>
          <p>Membership help</p>
          <p>
            (Existing membership carry over- you do not need to resubscribe)
          </p>
        </div>
        <div className="col-md-4 col-reg d-block">
          <h4 className="reg-h">3. Upload</h4>
          <div className="flex pb-1">
            <button className="bt-reg">Add a new Listing</button>
          </div>
          <p>Add Listing help</p>
          <p>See help for Artists for links to everything you need to know.</p>
        </div>
      </div>
      <h4 className="my-4 h-wel ">Welcome!</h4>
      <p>
        Aicoaster.com is the UK's leading website gallery and offers you, the
        talented artist, a platform from which to sell your art online to the
        public, without any of the hassles of your own website.
      </p>
      <p className="py-3">
        If you can answer "yes" to these questions, then we want you to join us
        and start selling art online.
      </p>
      <ul className="ul">
        <li>
          Are you a talented artist living in any of these eligible countries?
        </li>
        <li>
          Do you have three or more original paintings, sculptures, or other
          artworks to sell?
        </li>
        <li>
          Are you prepared to take greate quality photographs of your art?
        </li>
        <li>
          Will you be responsible, keep your gallery up to date and take your
          artwork offline when you are away and cannot fulfil orders?
        </li>
      </ul>
      <p className="py-3">
        If you answerd all question "yes", please read on, and consider becoming
        a member.
      </p>
      <h4 className="py-3">Key features and benefits at a glance</h4>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col" className="thead th">
              Feature
            </th>
            <th scope="col" className=" th">Benefit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td  className="td">Curated Quality</td>
            <td className="td">
              All artworks for sale have been through a rigourous vetting
              process by our expert curators. We help you find the right
              information to sell your work effectively.
            </td>
          </tr>
          <tr>
            <td  className="td">Become a Member</td>
            <td  className="td">
              Membership are only £50 per year. join a growing community of
              professional workig artists.
            </td>
          </tr>
          <tr>
            <td  className="td">Full control over your listing</td>
            <td  className="td"> 
              Create, manage and remove artworks at any time, and set your own
              prices.
            </td>
          </tr>
          <tr>
            <td className="td">Own Store Fronts</td>
            <td className="td">
              Have your own customized store front, showing only your artwork.
              Complete your artist profile, bio, and upload your own picture to
              engage with your buyers on a personal level.
            </td>
          </tr>
          <tr>
            <td  className="td">Robust sales alert system</td>
            <td  className="td">
              We alert you by email when an order is placed, so you should never
              miss an order.
            </td>
          </tr>
          <tr>
            <td  className="td">Free anti-fraud screening</td>
            <td  className="td">
              Selling on the internet is a minefiled. We take the risk out of
              selling through our fraud-screening processes. We only alert you
              of an order when it has passed our anti-fraud screening checks, so
              you can be 100% confident that you will get paid.
            </td>
          </tr>
          <tr>
            <td className="td">End-to-end order status tracking</td>
            <td className="td">
              Log in anytime to see the details of any sales and payment dates.
            </td>
          </tr>
          <tr>
            <td className="td">Total customer management</td>
            <td className="td">
              We take care of all customer-facing questions and issues,
              including invoicing, VAT, payments processing and accounting.
            </td>
          </tr>
          <tr>
            <td className="td">Fast payment turnaround</td>
            <td className="td">
              We pay artists by bank transfer. When you sign up we will ask you
              to provide your bank details. This is the most efficient payment
              method.
            </td>
          </tr>
          <tr>
            <td className="td">Fully automated invoicing system</td>
            <td className="td">Recieve invoices by email for every artwork sale.</td>
          </tr>
          <tr>
            <td className="td">Free search engine promotion</td>
            <td className="td">
              We spends thousands of pounds each month on you, promoting your
              artwork in search engines such as Google, MSN and Yahoo, and on
              social networking sites such as Facebook and Linkedin.
            </td>
          </tr>
        </tbody>
      </table>
      <h4 className="my-5">How it works</h4>
      <p>
        We market and sell your art via this site, Aicoaster.com the I leading
        destination for customers wishing to buy quality, curated art online. We
        will display, advertise and market your art online and offline, provide
        payment processing and credit card facilities, and work hard to bring
        customers to you.
      </p>
      <p className="py-3">
        At Aicoaster.com we focus on bringing customers to the website gallery.
        We charge a commission of 35% from the selling price you set for each
        artwork. This is much lower than high street gallery rates.
      </p>
      <p>
        Aicoaster.com is the UK's leading website gallery (type "art gallery"
        into Google and see how high we rank in the search engine results). In
        addition, we spend large amounts on search engine marketing and press
        advertisements.
      </p>
      <h4 className="py-4">Your key responsibilities</h4>
      <p>We ask that you operate your gallery professionally, as follows:</p>
      <ul className="ul">
        <li>
          You will package your artwork carefully and despatch it promptly when
          you receive an order
        </li>
        <li>
          {" "}
          You will remove your profile from the site when you go on holiday and
          replace it when you get back (can be done online)
        </li>
        <li>
          You will remove artworks immediately from the site when you sell them
          independently (can be done online)
        </li>
      </ul>
      <p>
        For the full artist terms and conditions of service, please read the
        Terms and Conditions for Artists.
      </p>
      <h4 className="py-4">You set the price</h4>
      <p>
        You know how much your art sells for, so you decide the selling price of
        your art. We takea commission of 35% from your price. This commission
        covers our costs of advertising, marketing, customer services, credit
        card processing fees, invoicing, admin and VAT.
      </p>
      <p>
        You are responsible for the costs of materials, packaging, and delivery
        to anywhere in the UK. Therefore you must set your price to include this
        cost. As an established artist, you probably already know how much it
        costs to package and deliver your style of artworks. If in doubt, £3O is
        usually sufficient for smaller pieces. For larger or heavy pieces
        Contact your preferred courier to establish the cost. Check delivery
        prices carefully as you are wholly responsible for the cost of delivery.
      </p>
      <h4 className="py-4">14 day money back guarantee</h4>
      <p>
        To stimulate sales and foster trust with potential customers, we offer
        all customers a 14-day no-quibble money back guarantee, which you must
        adhere to. The guarantee allows Customers to return artworks within 14
        days if they are not fully satisfied. They can return the artwork for
        any reason within this period. They will have to pay the postage and
        insurance costs if they return an artwork. You are not eligible to
        recoup the cost of delivering the artwork to the Customer. Our current
        rate of return is approx l in 250 artworks returned.
      </p>
      <p>
        For full details of the terms and conditions, you will be bound by
        please see Terms and Conditions for Artists.
      </p>
      <h4 className="py-4">How you get paid</h4>
      <p>
        Customers pay online through our credit card processing facilities. When
        payment is received, we will notify you of the details of the purchase
        by email and if necessary by phone. You must then package and despatch
        the artwork to arrive with the customer within 5 working days. Once we
        have confirmed that the artwork arrived safely, you will be paid
        approximately 28 days after that date (this is comprised of 7 days for
        delivery, 14-day money back guarantee, 7 days for return). You will be
        paid by bank transfer.
      </p>
      <h4 className="py-4">How to start selling art</h4>
      <p className="pb-3">
        There are a few hoops to jump through to start with, but don't worry
        we'll walk you through them. Here's an overview:
      </p>
      <div className="px-4">
        <h6 className="my-2">1. Sign up</h6>
        <p className="px-3">
          Here you will create your account to access ArtGallery's website,
          supply details about yourself, set up your membership subscription,
          set up your shop front, and provide your banking information to
          receive payments.
        </p>
        <h6 className="my-2">1. Create your listings</h6>
        <p className="px-3">
          This is where you will upload pictures of your artwork, enter a title
          and description, set it's category, style, keywords, price,
          availability, and other useful information. Our expert Curators will
          then review your artwork and work with you to make your listing as
          polished as possible before putting it live' for customers to see.
        </p>
        <h6 className="my-2">1. Making sales</h6>
        <p className="px-3">
          Congratulations! You will mark the artwork as 'sold, parcel it up, and
          send it off. You Can communicate easily with the buyer, to double
          check addresses and provide tracking information, and finally mark the
          order as completed. Well done!
        </p>
      </div>
      <h5 className="py-4">Come and join the family!</h5>
      <p>
        Please see the main Help for Artists page, which covers these steps in
        detail.
      </p>
    </div>
  );
};

export default Sell;
