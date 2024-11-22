// src/email.tsx
import { Html, Button } from "@react-email/components";
import { jsx } from "react/jsx-runtime";
var Email = ({ url }) => {
  return /* @__PURE__ */ jsx(Html, { lang: "en", children: /* @__PURE__ */ jsx(Button, { href: url, children: "Click me" }) });
};

// src/welcome.tsx
import {
  Body,
  Button as Button2,
  Container,
  Head,
  Hr,
  Html as Html2,
  Img,
  Preview,
  Section,
  Text
} from "@react-email/components";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var KoalaWelcomeEmail = ({
  userFirstname,
  url
}) => /* @__PURE__ */ jsxs(Html2, { children: [
  /* @__PURE__ */ jsx2(Head, {}),
  /* @__PURE__ */ jsx2(Preview, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx2(Body, { style: main, children: /* @__PURE__ */ jsxs(Container, { style: container, children: [
    /* @__PURE__ */ jsx2(
      Img,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        width: "170",
        height: "50",
        alt: "Koala",
        style: logo
      }
    ),
    /* @__PURE__ */ jsxs(Text, { style: paragraph, children: [
      "Hi ",
      userFirstname,
      ","
    ] }),
    /* @__PURE__ */ jsx2(Text, { style: paragraph, children: "Welcome to Kwic, the sales intelligence platform that helps you uncover qualified leads and close deals faster." }),
    /* @__PURE__ */ jsx2(Section, { style: btnContainer, children: /* @__PURE__ */ jsx2(Button2, { style: button, href: "https://kwic.in", children: "Get started" }) }),
    /* @__PURE__ */ jsxs(Text, { style: paragraph, children: [
      "Best,",
      /* @__PURE__ */ jsx2("br", {}),
      "The Kwic team"
    ] }),
    /* @__PURE__ */ jsx2(Hr, { style: hr }),
    /* @__PURE__ */ jsx2(Text, { style: footer, children: "42, Junction Main Rd, opp. POLICE STATION, Subramania Nagar, Suramangalam, Salem, Tamil Nadu 636005" })
  ] }) })
] });
KoalaWelcomeEmail.PreviewProps = {
  userFirstname: "Alan"
};
var main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};
var container = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
var logo = {
  margin: "0 auto"
};
var paragraph = {
  fontSize: "16px",
  lineHeight: "26px"
};
var btnContainer = {
  textAlign: "center"
};
var button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px"
};
var hr = {
  borderColor: "#cccccc",
  margin: "20px 0"
};
var footer = {
  color: "#8898aa",
  fontSize: "12px"
};

// src/password-reset.tsx
import {
  Body as Body2,
  Container as Container2,
  Head as Head2,
  Html as Html3,
  Img as Img2,
  Link,
  Preview as Preview2,
  Section as Section2,
  Text as Text2
} from "@react-email/components";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var passwordresetEmail = ({
  userFirstname,
  url
}) => /* @__PURE__ */ jsxs2(Html3, { children: [
  /* @__PURE__ */ jsx3(Head2, {}),
  /* @__PURE__ */ jsx3(Preview2, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx3(Body2, { style: main2, children: /* @__PURE__ */ jsxs2(Container2, { style: container2, children: [
    /* @__PURE__ */ jsx3(
      Img2,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        width: "130",
        height: "50",
        alt: "Koala",
        style: logo2
      }
    ),
    /* @__PURE__ */ jsxs2(Section2, { style: border, children: [
      /* @__PURE__ */ jsxs2(Text2, { style: paragraph2, children: [
        "Hi ",
        userFirstname,
        ","
      ] }),
      /* @__PURE__ */ jsx3(Text2, { style: paragraph2, children: "You requested to reset your password for your Kwic account. Click the link below to create a new password:" }),
      /* @__PURE__ */ jsxs2(Text2, { style: paragraph2, children: [
        "\u{1F449}",
        /* @__PURE__ */ jsx3(Link, { style: link, href: "https://app.kwic.in/auth/login", children: "Reset Password" })
      ] }),
      /* @__PURE__ */ jsx3(Text2, { style: paragraph2, children: "This link will expire in 24 hours. If you didn\u2019t request this, please ignore this email." })
    ] }),
    /* @__PURE__ */ jsxs2(Text2, { style: paragraph2, children: [
      "Thank you,",
      /* @__PURE__ */ jsx3("br", {}),
      /* @__PURE__ */ jsx3("strong", { children: "The Kwic team" })
    ] })
  ] }) })
] });
passwordresetEmail.PreviewProps = {
  userFirstname: "Alan"
};
var password_reset_default = passwordresetEmail;
var main2 = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};
var container2 = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
var logo2 = {
  margin: "0 auto"
};
var paragraph2 = {
  fontSize: "16px",
  lineHeight: "26px"
};
var border = {
  border: "solid 1px #dedede",
  borderRadius: "5px",
  padding: "8px",
  margin: "20px 0px 0px 0px"
};
var link = {
  textDecoration: "underline"
};

// src/login-alert.tsx
import {
  Body as Body3,
  Container as Container3,
  Head as Head3,
  Html as Html4,
  Img as Img3,
  Link as Link2,
  Preview as Preview3,
  Text as Text3
} from "@react-email/components";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var LoginAlertEmail = ({ userFirstname, url }) => /* @__PURE__ */ jsxs3(Html4, { children: [
  /* @__PURE__ */ jsx4(Head3, {}),
  /* @__PURE__ */ jsx4(Preview3, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx4(Body3, { style: main3, children: /* @__PURE__ */ jsxs3(Container3, { style: container3, children: [
    /* @__PURE__ */ jsx4(
      Img3,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        width: "170",
        height: "50",
        alt: "Koala",
        style: logo3
      }
    ),
    /* @__PURE__ */ jsxs3(Text3, { style: paragraph3, children: [
      "Hi ",
      userFirstname,
      ","
    ] }),
    /* @__PURE__ */ jsx4(Text3, { style: paragraph3, children: "We\u2019ve detected a login attempt from an unfamiliar location or device on your Kwic account:" }),
    /* @__PURE__ */ jsxs3("ul", { children: [
      /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsxs3(Text3, { children: [
        /* @__PURE__ */ jsx4("strong", { children: "Date and Time : " }),
        " ",
        /* @__PURE__ */ jsx4("span", { style: text, children: "November 8, 2024, 18:00 GMT" })
      ] }) }),
      /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsxs3(Text3, { children: [
        /* @__PURE__ */ jsx4("strong", { children: "Device : " }),
        " ",
        /* @__PURE__ */ jsx4("span", { style: text, children: "iPhone 14 - iOS 17 - Safari" })
      ] }) }),
      /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsxs3(Text3, { children: [
        /* @__PURE__ */ jsx4("strong", { children: "Location : " }),
        " ",
        /* @__PURE__ */ jsx4("span", { style: text, children: " Mumbai, India" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx4(Text3, { style: paragraph3, children: "If this was not you, please reset your password and contact our support team:" }),
    /* @__PURE__ */ jsxs3(Text3, { style: paragraph3, children: [
      "\u{1F449}",
      /* @__PURE__ */ jsxs3(Link2, { style: link2, href: "https://app.kwic.in/auth/login", children: [
        " ",
        "Reset Password"
      ] })
    ] }),
    /* @__PURE__ */ jsx4(Text3, { style: paragraph3, children: "This link will expire in 24 hours. If you didn\u2019t request this, please ignore this email." }),
    /* @__PURE__ */ jsxs3(Text3, { style: paragraph3, children: [
      "Stay safe,",
      /* @__PURE__ */ jsx4("br", {}),
      "The Kwic team"
    ] })
  ] }) })
] });
LoginAlertEmail.PreviewProps = {
  userFirstname: "Alan"
};
var login_alert_default = LoginAlertEmail;
var main3 = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};
var container3 = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
var logo3 = {
  margin: "0 auto"
};
var paragraph3 = {
  fontSize: "16px",
  lineHeight: "26px"
};
var text = {
  color: "#3f413f"
};
var link2 = {
  textDecoration: "underline"
};

// src/promoting.tsx
import {
  Body as Body4,
  Container as Container4,
  Head as Head4,
  Hr as Hr2,
  Html as Html5,
  Img as Img4,
  Link as Link3,
  Preview as Preview4,
  Text as Text4
} from "@react-email/components";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var PromotingEmail = ({ userFirstname, url }) => /* @__PURE__ */ jsxs4(Html5, { children: [
  /* @__PURE__ */ jsx5(Head4, {}),
  /* @__PURE__ */ jsx5(Preview4, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx5(Body4, { style: main4, children: /* @__PURE__ */ jsxs4(Container4, { style: container4, children: [
    /* @__PURE__ */ jsx5(
      Img4,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        width: "170",
        height: "50",
        alt: "Koala",
        style: logo4
      }
    ),
    /* @__PURE__ */ jsxs4(Text4, { style: paragraph4, children: [
      "Hi ",
      userFirstname,
      ","
    ] }),
    /* @__PURE__ */ jsxs4(Text4, { style: paragraph4, children: [
      "We\u2019re excited to share that ",
      /* @__PURE__ */ jsx5("span", { style: text2, children: "Kwic Whatsapp Business API" }),
      "  is now available on WhatsApp! This means faster and more convenient communication for you."
    ] }),
    /* @__PURE__ */ jsx5(Text4, { style: paragraph4, children: "With our WhatsApp Business service, you can:" }),
    /* @__PURE__ */ jsxs4("ul", { children: [
      /* @__PURE__ */ jsx5("li", { children: /* @__PURE__ */ jsx5(Text4, { style: paragraph4, children: "Get instant answers to your questions." }) }),
      /* @__PURE__ */ jsx5("li", { children: /* @__PURE__ */ jsx5(Text4, { style: paragraph4, children: "Receive updates on your orders and services." }) }),
      /* @__PURE__ */ jsx5("li", { children: /* @__PURE__ */ jsx5(Text4, { style: paragraph4, children: "Enjoy personalized support directly from our team." }) })
    ] }),
    /* @__PURE__ */ jsxs4(Text4, { style: paragraph4, children: [
      "simply click ",
      /* @__PURE__ */ jsx5(Link3, { href: "https://www.kwic.in/", children: "Click" }),
      " to start a conversation."
    ] }),
    /* @__PURE__ */ jsx5(Text4, { style: paragraph4, children: "We look forward to connecting with you on WhatsApp!" }),
    /* @__PURE__ */ jsxs4(Text4, { style: paragraph4, children: [
      "Best,",
      /* @__PURE__ */ jsx5("br", {}),
      "The Kwic team"
    ] }),
    /* @__PURE__ */ jsx5(Hr2, { style: hr2 }),
    /* @__PURE__ */ jsx5(Text4, { style: footer2, children: "42, Junction Main Rd, opp. POLICE STATION, Subramania Nagar, Suramangalam, Salem, Tamil Nadu 636005" })
  ] }) })
] });
PromotingEmail.PreviewProps = {
  userFirstname: "Alan"
};
var promoting_default = PromotingEmail;
var main4 = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};
var container4 = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
var logo4 = {
  margin: "0 auto"
};
var paragraph4 = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#787a78 "
};
var hr2 = {
  borderColor: "#cccccc",
  margin: "20px 0"
};
var footer2 = {
  color: "#8898aa",
  fontSize: "12px"
};
var text2 = {
  color: "#2fee23",
  fontSize: "18px"
};

// src/OTP-verification.tsx
import {
  Body as Body5,
  Container as Container5,
  Head as Head5,
  Heading,
  Hr as Hr3,
  Html as Html6,
  Img as Img5,
  Link as Link4,
  Preview as Preview5,
  Section as Section3,
  Text as Text5
} from "@react-email/components";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var OTPVerificationEmail = ({
  userFirstname,
  url
}) => /* @__PURE__ */ jsxs5(Html6, { children: [
  /* @__PURE__ */ jsx6(Head5, {}),
  /* @__PURE__ */ jsx6(Preview5, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx6(Body5, { children: /* @__PURE__ */ jsxs5(Container5, { style: container5, children: [
    /* @__PURE__ */ jsx6(
      Img5,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        width: "130",
        height: "50",
        alt: "Koala"
      }
    ),
    /* @__PURE__ */ jsxs5(Section3, { children: [
      /* @__PURE__ */ jsxs5(Text5, { style: paragraph5, children: [
        "Hi ",
        /* @__PURE__ */ jsx6("strong", { children: userFirstname }),
        ","
      ] }),
      /* @__PURE__ */ jsx6(Text5, { style: paragraph5, children: "Your Verification code is:" }),
      /* @__PURE__ */ jsx6(Heading, { children: /* @__PURE__ */ jsx6("strong", { style: text3, children: "984572" }) }),
      /* @__PURE__ */ jsx6(Text5, { style: paragraph5, children: "Your account can\u2019t be accessed without this verification code, even if you didn\u2019t submit this request." }),
      /* @__PURE__ */ jsx6(Text5, { style: paragraph5, children: "To keep your account secure, we recommend using a unique password for your Kwic account or using the Kwic Account Access app to sign in. Kwic Account Access\u2019 two-factor authentication makes signing in to your account easier, without needing to remember or change passwords." }),
      /* @__PURE__ */ jsxs5(Text5, { style: paragraph5, children: [
        /* @__PURE__ */ jsx6(Link4, { style: link3, href: "https://www.kwic.in/", children: "Learn more" }),
        " ",
        "and download the Adobe Account Access app."
      ] }),
      /* @__PURE__ */ jsxs5(Text5, { style: paragraph5, children: [
        "If you have any questions, please",
        " ",
        /* @__PURE__ */ jsx6(Link4, { style: link3, href: "#", children: "contact Support" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxs5(Text5, { style: paragraph5, children: [
      "Thank you,",
      /* @__PURE__ */ jsx6("br", {}),
      /* @__PURE__ */ jsx6("strong", { children: "The Kwic team" })
    ] }),
    /* @__PURE__ */ jsx6(Hr3, { style: hr3 }),
    /* @__PURE__ */ jsx6(Text5, { style: footer3, children: "42, Junction Main Rd, opp. POLICE STATION, Subramania Nagar, Suramangalam, Salem, Tamil Nadu 636005" })
  ] }) })
] });
OTPVerificationEmail.PreviewProps = {
  userFirstname: "Alan"
};
var OTP_verification_default = OTPVerificationEmail;
var container5 = {
  margin: "0 auto",
  backgroundColor: "#FFFFFF",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  padding: "8px 12px 0px"
};
var paragraph5 = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#848989 "
};
var hr3 = {
  borderColor: "#cccccc",
  margin: "20px 0"
};
var footer3 = {
  color: "#8898aa",
  fontSize: "12px",
  padding: "3px 0px"
};
var text3 = {
  color: "#34495e"
};
var link3 = {
  textDecoration: "underline"
};

// src/opt.tsx
import {
  Body as Body6,
  Container as Container6,
  Head as Head6,
  Hr as Hr4,
  Html as Html7,
  Img as Img6,
  Link as Link5,
  Preview as Preview6,
  Section as Section4,
  Text as Text6
} from "@react-email/components";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var OTPEmail = ({ userFirstname, url }) => /* @__PURE__ */ jsxs6(Html7, { children: [
  /* @__PURE__ */ jsx7(Head6, {}),
  /* @__PURE__ */ jsx7(Preview6, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx7(Body6, { style: main5, children: /* @__PURE__ */ jsxs6(Container6, { style: container6, children: [
    /* @__PURE__ */ jsx7(
      Img6,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        width: "120",
        height: "50",
        alt: "Koala",
        style: logo5
      }
    ),
    /* @__PURE__ */ jsxs6(Section4, { style: section, children: [
      /* @__PURE__ */ jsx7(Text6, { style: paragraph6, children: /* @__PURE__ */ jsx7("strong", { children: "Your Verification code " }) }),
      /* @__PURE__ */ jsxs6(Text6, { style: paragraph6, children: [
        "Hi ",
        /* @__PURE__ */ jsx7("strong", { children: userFirstname }),
        ","
      ] }),
      /* @__PURE__ */ jsxs6(Text6, { style: paragraph6, children: [
        "Thank you for choosing Kwic. Use the following OTP to complete the procedure to change your email address. OTP is valid for",
        " ",
        /* @__PURE__ */ jsx7("strong", { children: "5 minutes" }),
        " . Do not share this code with others, including Kwic employees."
      ] }),
      /* @__PURE__ */ jsx7(Text6, { children: /* @__PURE__ */ jsx7("strong", { style: strong, children: "934722" }) })
    ] }),
    /* @__PURE__ */ jsxs6(Text6, { style: paragraph6, children: [
      "Need help? visit our",
      " ",
      /* @__PURE__ */ jsx7(Link5, { style: link4, href: "https://www.kwic.in/", children: "web page" })
    ] }),
    /* @__PURE__ */ jsx7(Hr4, { style: hr4 }),
    /* @__PURE__ */ jsx7(Text6, { style: footer4, children: "42, Junction Main Rd, opp. POLICE STATION, Subramania Nagar, Suramangalam, Salem, Tamil Nadu 636005" })
  ] }) })
] });
OTPEmail.PreviewProps = {
  userFirstname: "Alan"
};
var opt_default = OTPEmail;
var main5 = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};
var logo5 = {
  margin: "0 auto"
};
var container6 = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
var paragraph6 = {
  fontSize: "16px",
  lineHeight: "26px"
};
var hr4 = {
  borderColor: "#cccccc",
  margin: "20px 0px 0px 0px"
};
var footer4 = {
  color: "#8898aa",
  fontSize: "12px",
  padding: "1px 0px"
};
var section = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  border: "solid 1px #dedede",
  textAlign: "center",
  padding: "16px 8px",
  margin: "16px 0px 0px 0px"
};
var strong = {
  color: "#34495e",
  fontSize: "36px",
  lineheight: "40px"
};
var link4 = {
  textDecoration: "underline"
};

// src/welcome-kwic.tsx
import {
  Body as Body7,
  Button as Button4,
  Container as Container7,
  Head as Head7,
  Hr as Hr5,
  Html as Html8,
  Img as Img7,
  Preview as Preview7,
  Section as Section5,
  Text as Text7
} from "@react-email/components";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var WelcomeEmail = ({ userFirstname, url }) => /* @__PURE__ */ jsxs7(Html8, { children: [
  /* @__PURE__ */ jsx8(Head7, {}),
  /* @__PURE__ */ jsx8(Preview7, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx8(Body7, { style: main6, children: /* @__PURE__ */ jsxs7(Container7, { style: container7, children: [
    /* @__PURE__ */ jsx8(
      Img7,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        width: "130",
        height: "50",
        alt: "Koala",
        style: logo6
      }
    ),
    /* @__PURE__ */ jsxs7(Text7, { style: paragraph7, children: [
      "Hi ",
      userFirstname,
      ","
    ] }),
    /* @__PURE__ */ jsxs7(Text7, { style: paragraph7, children: [
      "Welcome to ",
      /* @__PURE__ */ jsx8("strong", { style: text4, children: "Kwic" }),
      " , where finding qualified leads and closing deals is faster and smarter! We're excited to have you with us and can't wait to see you thrive. Let\u2019s take your sales to the next level!"
    ] }),
    /* @__PURE__ */ jsx8(Section5, { style: btnContainer2, children: /* @__PURE__ */ jsx8(Button4, { style: button2, href: "https://kwic.in", children: "Get started" }) }),
    /* @__PURE__ */ jsxs7(Text7, { style: paragraph7, children: [
      "Best,",
      /* @__PURE__ */ jsx8("br", {}),
      /* @__PURE__ */ jsx8("strong", { children: "The Kwic team" })
    ] }),
    /* @__PURE__ */ jsx8(Hr5, { style: hr5 }),
    /* @__PURE__ */ jsx8(Text7, { style: footer5, children: "42, Junction Main Rd, opp. POLICE STATION, Subramania Nagar, Suramangalam, Salem, Tamil Nadu 636005" })
  ] }) })
] });
WelcomeEmail.PreviewProps = {
  userFirstname: "Alan"
};
var welcome_kwic_default = WelcomeEmail;
var main6 = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};
var container7 = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
var logo6 = {
  margin: "0 auto"
};
var paragraph7 = {
  fontSize: "16px",
  lineHeight: "26px"
};
var btnContainer2 = {
  textAlign: "center"
};
var button2 = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px"
};
var hr5 = {
  borderColor: "#cccccc",
  margin: "20px 0"
};
var footer5 = {
  color: "#8898aa",
  fontSize: "12px",
  padding: "2px 0px"
};
var text4 = {
  color: "#28b463"
};

// src/change-email.tsx
import {
  Body as Body8,
  Button as Button5,
  Container as Container8,
  Head as Head8,
  Html as Html9,
  Img as Img8,
  Link as Link6,
  Preview as Preview8,
  Section as Section6,
  Tailwind,
  Text as Text8
} from "@react-email/components";
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var ChangeEmail = ({ userFirstname, url }) => /* @__PURE__ */ jsxs8(Html9, { children: [
  /* @__PURE__ */ jsx9(Head8, {}),
  /* @__PURE__ */ jsx9(Preview8, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx9(Tailwind, { children: /* @__PURE__ */ jsx9(Body8, { className: "font-sans text-gray-800", children: /* @__PURE__ */ jsxs8(Container8, { className: "bg-purple-50 rounded-md p-[12px]", children: [
    /* @__PURE__ */ jsx9(
      Img8,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        width: "130",
        height: "50",
        alt: "Koala"
      }
    ),
    /* @__PURE__ */ jsxs8(Text8, { children: [
      "Hi ",
      userFirstname,
      ","
    ] }),
    /* @__PURE__ */ jsx9(Text8, { className: "text-2xl font-semibold", children: "Email change request" }),
    /* @__PURE__ */ jsxs8(Text8, { children: [
      "Follow the button below to confirm the update of your email from",
      /* @__PURE__ */ jsx9("span", { className: "underline text-blue-500", children: /* @__PURE__ */ jsxs8(Link6, { href: "mailto:nisharanganathan3@gmail.com", children: [
        " ",
        "nisharanganathan3@gmail.com",
        " "
      ] }) }),
      " ",
      "to",
      " ",
      /* @__PURE__ */ jsx9("span", { className: "underline text-blue-500", children: /* @__PURE__ */ jsx9(Link6, { href: "mailto:nisha@3443gmail.com", children: "nisha@3443gmail.com" }) }),
      ". If this wasn't you, please contact",
      " ",
      /* @__PURE__ */ jsx9("span", { className: "underline text-blue-500", children: /* @__PURE__ */ jsx9(Link6, { href: "mailto:Kwic@resend.com", children: "Kwic@resend.com" }) })
    ] }),
    /* @__PURE__ */ jsx9(Section6, { children: /* @__PURE__ */ jsx9(
      Button5,
      {
        href: "https://mail.google.com/mail/u/0/#inbox",
        className: "bg-green-500 px-4 py-2 rounded-md text-white font-semibold",
        children: "Confirm request"
      }
    ) }),
    /* @__PURE__ */ jsx9(Text8, { className: "text-xs text-[#8898aa] pt-2", children: "42, Junction Main Rd, opp. POLICE STATION, Subramania Nagar, Suramangalam, Salem, Tamil Nadu 636005" })
  ] }) }) })
] });
ChangeEmail.PreviewProps = {
  userFirstname: "Alan"
};
var change_email_default = ChangeEmail;

// src/welcome-2.tsx
import {
  Body as Body9,
  Button as Button6,
  Container as Container9,
  Head as Head9,
  Html as Html10,
  Img as Img9,
  Preview as Preview9,
  Section as Section7,
  Tailwind as Tailwind2,
  Text as Text9
} from "@react-email/components";
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
var Welcome2Email = ({
  userFirstname,
  url
}) => /* @__PURE__ */ jsxs9(Html10, { children: [
  /* @__PURE__ */ jsx10(Head9, {}),
  /* @__PURE__ */ jsx10(Preview9, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx10(Tailwind2, { children: /* @__PURE__ */ jsx10(Body9, { children: /* @__PURE__ */ jsxs9(Container9, { className: "rounded-lg p-[12px] bg-purple-50", children: [
    /* @__PURE__ */ jsx10(
      Img9,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        width: "130",
        height: "50",
        alt: "Koala"
      }
    ),
    /* @__PURE__ */ jsxs9(Text9, { className: "text-gray-600", children: [
      "Hi ",
      userFirstname,
      ","
    ] }),
    /* @__PURE__ */ jsxs9(Text9, { className: "text-gray-600", children: [
      "Welcome to ",
      /* @__PURE__ */ jsx10("strong", { className: "text-green-500 text-lg", children: "Kwic" }),
      " , where finding qualified leads and closing deals is faster and smarter! We're excited to have you with us and can't wait to see you thrive. Let\u2019s take your sales to the next level!"
    ] }),
    /* @__PURE__ */ jsx10(Section7, { children: /* @__PURE__ */ jsx10(Button6, { className: "bg-[#5F51E8] rounded-md p-[12px] text-white", href: "https://kwic.in", children: "Get started" }) }),
    /* @__PURE__ */ jsxs9(Text9, { children: [
      "Best,",
      /* @__PURE__ */ jsx10("br", {}),
      /* @__PURE__ */ jsx10("strong", { children: "The Kwic team" })
    ] }),
    /* @__PURE__ */ jsx10(Text9, { className: "text-xs text-[#8898aa]", children: "42, Junction Main Rd, opp. POLICE STATION, Subramania Nagar, Suramangalam, Salem, Tamil Nadu 636005" })
  ] }) }) })
] });
Welcome2Email.PreviewProps = {
  userFirstname: "Alan"
};
var welcome_2_default = Welcome2Email;

// src/Onboarding-Email.tsx
import {
  Body as Body10,
  Button as Button7,
  Container as Container10,
  Head as Head10,
  Html as Html11,
  Img as Img10,
  Link as Link7,
  Preview as Preview10,
  Section as Section8,
  Text as Text10
} from "@react-email/components";
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
var Onboarding_WelcomeEmail = ({
  userFirstname,
  url
}) => /* @__PURE__ */ jsxs10(Html11, { children: [
  /* @__PURE__ */ jsx11(Head10, {}),
  /* @__PURE__ */ jsx11(Preview10, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx11(Body10, { style: main7, children: /* @__PURE__ */ jsxs10(Container10, { style: container8, children: [
    /* @__PURE__ */ jsx11(
      Img10,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        alt: "Koala",
        style: logo7
      }
    ),
    /* @__PURE__ */ jsxs10(Text10, { style: paragraph8, children: [
      "Hi ",
      userFirstname,
      ","
    ] }),
    /* @__PURE__ */ jsx11(Text10, { style: paragraph8, children: "Welcome to KWIC! We're thrilled to have you as part of our community. You\u2019ve just taken the first step toward simplifying your workflow and achieving your goals with our platform." }),
    /* @__PURE__ */ jsx11(Text10, { style: paragraph8, children: "To get started quickly:" }),
    /* @__PURE__ */ jsx11(Section8, { children: /* @__PURE__ */ jsxs10("ul", { children: [
      /* @__PURE__ */ jsx11("li", { children: /* @__PURE__ */ jsxs10(Text10, { style: paragraph8, children: [
        /* @__PURE__ */ jsx11("strong", { children: "Log In: " }),
        " Head to",
        /* @__PURE__ */ jsx11(Link7, { href: "https://app.kwic.in/auth/login", children: " Login here " }),
        "to access your account."
      ] }) }),
      /* @__PURE__ */ jsx11("li", { children: /* @__PURE__ */ jsxs10(Text10, { style: paragraph8, children: [
        /* @__PURE__ */ jsx11("strong", { children: "Set Up: " }),
        " Follow the easy prompts to customize your profile and preferences."
      ] }) }),
      /* @__PURE__ */ jsx11("li", { children: /* @__PURE__ */ jsxs10(Text10, { style: paragraph8, children: [
        /* @__PURE__ */ jsx11("strong", { children: " Explore: " }),
        " Check out the dashboard and key features that can help boost your productivity."
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs10(Text10, { style: paragraph8, children: [
      "Need help? We\u2019re just an email away! Reach out to us at",
      /* @__PURE__ */ jsx11(Link7, { href: "mailto:info@kwic.in", children: " info@kwic.in " }),
      ",and our team will be happy to assist you."
    ] }),
    /* @__PURE__ */ jsx11(Text10, { style: paragraph8, children: "Thanks for choosing KWIC! We\u2019re here to support you all the way." }),
    /* @__PURE__ */ jsx11(Section8, { style: btnContainer3, children: /* @__PURE__ */ jsx11(Button7, { style: button3, href: "https://kwic.in", children: "Get started" }) }),
    /* @__PURE__ */ jsxs10(Text10, { style: paragraph8, children: [
      "Best,",
      /* @__PURE__ */ jsx11("br", {}),
      "The Kwic team"
    ] })
  ] }) })
] });
Onboarding_WelcomeEmail.PreviewProps = {
  userFirstname: "Alan"
};
var Onboarding_Email_default = Onboarding_WelcomeEmail;
var main7 = {
  maxWidth: "600px",
  margin: "0 auto",
  fontfamily: "Arial, sans-serif",
  lineheight: "1.6",
  Color: "#333333"
};
var container8 = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
var logo7 = {
  margin: "0 auto",
  width: "200px",
  height: "auto"
};
var paragraph8 = {
  fontSize: "16px",
  lineHeight: "26px"
};
var btnContainer3 = {
  textAlign: "center"
};
var button3 = {
  display: "block",
  padding: "12px 24px",
  backgroundColor: "#007bff",
  color: "#ffffff",
  textDecoration: "none",
  borderRadius: "4px",
  margin: "20px 0"
};

// src/payment-details/payment-success.tsx
import {
  Body as Body11,
  Container as Container11,
  Head as Head11,
  Html as Html12,
  Img as Img11,
  Link as Link8,
  Preview as Preview11,
  Text as Text11
} from "@react-email/components";
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
var PaymentSuccessEmail = ({
  userFirstname,
  url
}) => /* @__PURE__ */ jsxs11(Html12, { children: [
  /* @__PURE__ */ jsx12(Head11, {}),
  /* @__PURE__ */ jsx12(Preview11, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx12(Body11, { style: main8, children: /* @__PURE__ */ jsxs11(Container11, { style: container9, children: [
    /* @__PURE__ */ jsx12(
      Img11,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        alt: "Koala",
        style: logo8
      }
    ),
    /* @__PURE__ */ jsxs11(Text11, { style: paragraph9, children: [
      "Hi ",
      userFirstname,
      ","
    ] }),
    /* @__PURE__ */ jsx12(Text11, { style: paragraph9, children: "Your payment of $20,000 has been successfully processed!" }),
    /* @__PURE__ */ jsxs11(Text11, { style: paragraph9, children: [
      /* @__PURE__ */ jsx12("strong", { children: " Invoice Number:" }),
      " +91 8347282293"
    ] }),
    /* @__PURE__ */ jsxs11(Text11, { style: paragraph9, children: [
      /* @__PURE__ */ jsx12("strong", { children: "Payment Date:" }),
      " 13-NOV-2024"
    ] }),
    /* @__PURE__ */ jsxs11(Text11, { style: paragraph9, children: [
      "Your receipt is available here: ",
      /* @__PURE__ */ jsx12(Link8, { href: "#", children: "Receipt Link" }),
      "."
    ] }),
    /* @__PURE__ */ jsxs11(Text11, { style: paragraph9, children: [
      "If you have any questions, feel free to reach out at",
      /* @__PURE__ */ jsx12(Link8, { href: "mailto:info@kwic.in", children: " info@kwic.in " }),
      "."
    ] }),
    /* @__PURE__ */ jsx12(Text11, { style: paragraph9, children: "Thanks for being a valued customer!" }),
    /* @__PURE__ */ jsxs11(Text11, { style: paragraph9, children: [
      "Best,",
      /* @__PURE__ */ jsx12("br", {}),
      "The Kwic team"
    ] })
  ] }) })
] });
PaymentSuccessEmail.PreviewProps = {
  userFirstname: "Alan"
};
var payment_success_default = PaymentSuccessEmail;
var main8 = {
  maxWidth: "600px",
  margin: "0 auto",
  fontfamily: "Arial, sans-serif",
  lineheight: "1.6",
  Color: "#333333"
};
var container9 = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
var logo8 = {
  margin: "0 auto",
  width: "200px",
  height: "auto"
};
var paragraph9 = {
  fontSize: "16px",
  lineHeight: "26px"
};

// src/payment-details/payment-failed.tsx
import {
  Body as Body12,
  Container as Container12,
  Head as Head12,
  Html as Html13,
  Img as Img12,
  Link as Link9,
  Preview as Preview12,
  Text as Text12
} from "@react-email/components";
import { jsx as jsx13, jsxs as jsxs12 } from "react/jsx-runtime";
var PaymentFailedEmail = ({
  userFirstname,
  url
}) => /* @__PURE__ */ jsxs12(Html13, { children: [
  /* @__PURE__ */ jsx13(Head12, {}),
  /* @__PURE__ */ jsx13(Preview12, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx13(Body12, { style: main9, children: /* @__PURE__ */ jsxs12(Container12, { style: container10, children: [
    /* @__PURE__ */ jsx13(
      Img12,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        alt: "Koala",
        style: logo9
      }
    ),
    /* @__PURE__ */ jsxs12(Text12, { style: paragraph10, children: [
      "Hi ",
      userFirstname,
      ","
    ] }),
    /* @__PURE__ */ jsxs12(Text12, { style: paragraph10, children: [
      "We were unable to process your payment of $20,000 on 13-NOV-2024. Please log into your account at ",
      /* @__PURE__ */ jsx13(Link9, { href: "https://app.kwic.in/auth/login", children: "Login" }),
      " to update your payment method."
    ] }),
    /* @__PURE__ */ jsxs12(Text12, { style: paragraph10, children: [
      "If you need assistance, contact us at",
      /* @__PURE__ */ jsx13(Link9, { href: "mailto:info@kwic.in", children: " info@kwic.in " }),
      "."
    ] }),
    /* @__PURE__ */ jsxs12(Text12, { style: paragraph10, children: [
      "Thank you for your attention to this matter.",
      /* @__PURE__ */ jsx13("br", {}),
      "The Kwic team"
    ] })
  ] }) })
] });
PaymentFailedEmail.PreviewProps = {
  userFirstname: "Alan"
};
var payment_failed_default = PaymentFailedEmail;
var main9 = {
  maxWidth: "600px",
  margin: "0 auto",
  fontfamily: "Arial, sans-serif",
  lineheight: "1.6",
  Color: "#333333"
};
var container10 = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
var logo9 = {
  margin: "0 auto",
  width: "200px",
  height: "auto"
};
var paragraph10 = {
  fontSize: "16px",
  lineHeight: "26px"
};

// src/subscription-renewal.tsx
import {
  Body as Body13,
  Button as Button10,
  Container as Container13,
  Head as Head13,
  Heading as Heading2,
  Html as Html14,
  Img as Img13,
  Link as Link10,
  Preview as Preview13,
  Section as Section11,
  Text as Text13
} from "@react-email/components";
import { jsx as jsx14, jsxs as jsxs13 } from "react/jsx-runtime";
var SubscriptionRenewalEmail = ({
  userFirstname,
  url
}) => /* @__PURE__ */ jsxs13(Html14, { children: [
  /* @__PURE__ */ jsx14(Head13, {}),
  /* @__PURE__ */ jsx14(Preview13, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx14(Body13, { style: main10, children: /* @__PURE__ */ jsxs13(Container13, { style: container11, children: [
    /* @__PURE__ */ jsx14(
      Img13,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        alt: "Koala",
        style: logo10
      }
    ),
    /* @__PURE__ */ jsxs13(Heading2, { style: header, children: [
      " ",
      "Renew Your Subscription and Keep Your Business Connected"
    ] }),
    /* @__PURE__ */ jsxs13(Text13, { style: paragraph11, children: [
      "Hi ",
      userFirstname,
      ","
    ] }),
    /* @__PURE__ */ jsx14(Text13, { style: paragraph11, children: "We wanted to remind you that your subscription for the Kwic WhatsApp Business API is set to expire on 13-NOV-2024. Ensure uninterrupted access to seamless communication with your customers by renewing your subscription today." }),
    /* @__PURE__ */ jsxs13(Text13, { style: paragraph11, children: [
      " ",
      /* @__PURE__ */ jsx14("strong", { children: "Renewal Instructions:" })
    ] }),
    /* @__PURE__ */ jsx14(Section11, { children: /* @__PURE__ */ jsxs13("ul", { children: [
      /* @__PURE__ */ jsx14("li", { children: /* @__PURE__ */ jsxs13(Text13, { style: paragraph11, children: [
        "Log in to your account at",
        " ",
        /* @__PURE__ */ jsx14(Link10, { href: "https://www.kwic.in/", children: "Kwic" }),
        "."
      ] }) }),
      /* @__PURE__ */ jsx14("li", { children: /* @__PURE__ */ jsx14(Text13, { style: paragraph11, children: "Navigate to the \u201CPricing\u201D section." }) }),
      /* @__PURE__ */ jsx14("li", { children: /* @__PURE__ */ jsx14(Text13, { style: paragraph11, children: "Select your renewal plan and confirm your payment." }) })
    ] }) }),
    /* @__PURE__ */ jsx14(Text13, { style: paragraph11, children: /* @__PURE__ */ jsx14("strong", { children: "Pricing & Benefits of Renewing:" }) }),
    /* @__PURE__ */ jsx14(Section11, { children: /* @__PURE__ */ jsxs13("ol", { children: [
      /* @__PURE__ */ jsx14("li", { children: /* @__PURE__ */ jsxs13(Text13, { style: paragraph11, children: [
        /* @__PURE__ */ jsx14("strong", { children: "Competitive Pricing:" }),
        " Secure the best rates and avoid any service interruption."
      ] }) }),
      /* @__PURE__ */ jsx14("li", { children: /* @__PURE__ */ jsxs13(Text13, { style: paragraph11, children: [
        /* @__PURE__ */ jsx14("strong", { children: "Advanced Features: " }),
        " Continue enjoying WhatsApp Flows, WhatsApp Business API, WhatsApp Chatbot, WhatsApp BoardCast ,WhatsApp Shop."
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx14(Text13, { style: paragraph11, children: "Act now to keep your business running smoothly and connected with your customers through the Kwic WhatsApp Business API." }),
    /* @__PURE__ */ jsx14(Section11, { style: btnContainer4, children: /* @__PURE__ */ jsx14(Button10, { style: button4, href: "https://www.kwic.in/pricing", children: "Renewal" }) }),
    /* @__PURE__ */ jsx14(Text13, { style: paragraph11, children: "Thank you for choosing Kwic for your business needs!" }),
    /* @__PURE__ */ jsxs13(Text13, { style: paragraph11, children: [
      "Best regards,",
      /* @__PURE__ */ jsx14("br", {}),
      "The Kwic team"
    ] })
  ] }) })
] });
SubscriptionRenewalEmail.PreviewProps = {
  userFirstname: "Alan"
};
var subscription_renewal_default = SubscriptionRenewalEmail;
var main10 = {
  maxWidth: "600px",
  margin: "0 auto",
  fontfamily: "Arial, sans-serif",
  lineheight: "1.6",
  Color: "#333333"
};
var container11 = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
var logo10 = {
  margin: "0 auto",
  width: "200px",
  height: "auto"
};
var paragraph11 = {
  fontSize: "16px",
  lineHeight: "26px"
};
var btnContainer4 = {
  textAlign: "center"
};
var button4 = {
  display: "block",
  padding: "12px 24px",
  backgroundColor: "#007bff",
  color: "#ffffff",
  textDecoration: "none",
  borderRadius: "4px",
  margin: "20px 0"
};
var header = {
  backgroundColor: "#f8f9fa",
  padding: "20px",
  textAlign: "center"
};

// src/API_Connection-or-Disconnection/API-Connection.tsx
import {
  Body as Body14,
  Container as Container14,
  Head as Head14,
  Html as Html15,
  Img as Img14,
  Preview as Preview14,
  Text as Text14
} from "@react-email/components";
import { jsx as jsx15, jsxs as jsxs14 } from "react/jsx-runtime";
var APIConnectionEmail = ({
  userFirstname,
  url
}) => /* @__PURE__ */ jsxs14(Html15, { children: [
  /* @__PURE__ */ jsx15(Head14, {}),
  /* @__PURE__ */ jsx15(Preview14, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx15(Body14, { style: main11, children: /* @__PURE__ */ jsxs14(Container14, { style: container12, children: [
    /* @__PURE__ */ jsx15(
      Img14,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        alt: "Koala",
        style: logo11
      }
    ),
    /* @__PURE__ */ jsxs14(Text14, { style: paragraph12, children: [
      "Dear ",
      userFirstname,
      ","
    ] }),
    /* @__PURE__ */ jsx15(Text14, { style: paragraph12, children: "We are pleased to inform you that your WhatsApp API connection has been successfully established." }),
    /* @__PURE__ */ jsxs14(Text14, { style: paragraph12, children: [
      " ",
      /* @__PURE__ */ jsx15("strong", { children: "Current Status: " }),
      "Connected"
    ] }),
    /* @__PURE__ */ jsx15(Text14, { style: paragraph12, children: "You can now enjoy uninterrupted messaging services. If you experience any issues, please refer to our troubleshooting guide or reach out for support." }),
    /* @__PURE__ */ jsx15(Text14, { style: paragraph12, children: "Thank you for choosing Kwic." }),
    /* @__PURE__ */ jsxs14(Text14, { style: paragraph12, children: [
      "Best regards,",
      /* @__PURE__ */ jsx15("br", {}),
      "The Kwic team"
    ] })
  ] }) })
] });
APIConnectionEmail.PreviewProps = {
  userFirstname: "Alan"
};
var API_Connection_default = APIConnectionEmail;
var main11 = {
  maxWidth: "600px",
  margin: "0 auto",
  fontfamily: "Arial, sans-serif",
  lineheight: "1.6",
  Color: "#333333"
};
var container12 = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
var logo11 = {
  margin: "0 auto",
  width: "200px",
  height: "auto"
};
var paragraph12 = {
  fontSize: "16px",
  lineHeight: "26px"
};

// src/API_Connection-or-Disconnection/API_Disconnection.tsx
import {
  Body as Body15,
  Container as Container15,
  Head as Head15,
  Html as Html16,
  Img as Img15,
  Link as Link12,
  Preview as Preview15,
  Section as Section13,
  Text as Text15
} from "@react-email/components";
import { jsx as jsx16, jsxs as jsxs15 } from "react/jsx-runtime";
var APIDisconnectionEmail = ({
  userFirstname,
  url
}) => /* @__PURE__ */ jsxs15(Html16, { children: [
  /* @__PURE__ */ jsx16(Head15, {}),
  /* @__PURE__ */ jsx16(Preview15, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx16(Body15, { style: main12, children: /* @__PURE__ */ jsxs15(Container15, { style: container13, children: [
    /* @__PURE__ */ jsx16(
      Img15,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        alt: "Koala",
        style: logo12
      }
    ),
    /* @__PURE__ */ jsxs15(Text15, { style: paragraph13, children: [
      "Dear ",
      userFirstname,
      ","
    ] }),
    /* @__PURE__ */ jsx16(Text15, { style: paragraph13, children: "We are notifying you that the connection status of your WhatsApp API has changed." }),
    /* @__PURE__ */ jsxs15(Text15, { style: paragraph13, children: [
      " ",
      /* @__PURE__ */ jsx16("strong", { children: "Current Status: " }),
      "Disconnected"
    ] }),
    /* @__PURE__ */ jsx16(Text15, { style: paragraph13, children: "This may affect your ability to send or receive messages. Please follow the troubleshooting steps below to restore the connection:" }),
    /* @__PURE__ */ jsx16(Section13, { children: /* @__PURE__ */ jsxs15("ol", { children: [
      /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsx16(Text15, { style: paragraph13, children: "Verify your internet connectivity." }) }),
      /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsx16(Text15, { style: paragraph13, children: "Ensure the API key or token is valid and up-to-date." }) }),
      /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsx16(Text15, { style: paragraph13, children: "Check server logs for detailed error messages." }) }),
      /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsx16(Text15, { style: paragraph13, children: "Restart your application or service." }) })
    ] }) }),
    /* @__PURE__ */ jsxs15(Text15, { style: paragraph13, children: [
      "If the issue persists, please contact our support team at",
      " ",
      /* @__PURE__ */ jsx16(Link12, { href: "mailto:info@kwic.in", children: " info@kwic.in " }),
      "."
    ] }),
    /* @__PURE__ */ jsx16(Text15, { style: paragraph13, children: "Thank you for your attention to this matter." }),
    /* @__PURE__ */ jsxs15(Text15, { style: paragraph13, children: [
      "Best regards,",
      /* @__PURE__ */ jsx16("br", {}),
      "The Kwic team"
    ] })
  ] }) })
] });
APIDisconnectionEmail.PreviewProps = {
  userFirstname: "Alan"
};
var API_Disconnection_default = APIDisconnectionEmail;
var main12 = {
  maxWidth: "600px",
  margin: "0 auto",
  fontfamily: "Arial, sans-serif",
  lineheight: "1.6",
  Color: "#333333"
};
var container13 = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
var logo12 = {
  margin: "0 auto",
  width: "200px",
  height: "auto"
};
var paragraph13 = {
  fontSize: "16px",
  lineHeight: "26px"
};

// src/Message-failed.tsx
import {
  Body as Body16,
  Container as Container16,
  Head as Head16,
  Html as Html17,
  Img as Img16,
  Link as Link13,
  Preview as Preview16,
  Section as Section14,
  Text as Text16
} from "@react-email/components";
import { jsx as jsx17, jsxs as jsxs16 } from "react/jsx-runtime";
var MessageFailedEmail = ({
  userFirstname,
  url
}) => /* @__PURE__ */ jsxs16(Html17, { children: [
  /* @__PURE__ */ jsx17(Head16, {}),
  /* @__PURE__ */ jsx17(Preview16, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx17(Body16, { style: main13, children: /* @__PURE__ */ jsxs16(Container16, { style: container14, children: [
    /* @__PURE__ */ jsx17(
      Img16,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        alt: "Koala",
        style: logo13
      }
    ),
    /* @__PURE__ */ jsxs16(Text16, { style: paragraph14, children: [
      "Dear ",
      userFirstname,
      ","
    ] }),
    /* @__PURE__ */ jsx17(Text16, { style: paragraph14, children: "We regret to inform you that the delivery of your recent message through the Kwic Business WhatsApp API was unsuccessful." }),
    /* @__PURE__ */ jsxs16(Text16, { style: paragraph14, children: [
      /* @__PURE__ */ jsx17("strong", { children: "Error Details: " }),
      "Message not delivered duto recipient\u2019s unavailable status."
    ] }),
    /* @__PURE__ */ jsx17(Text16, { style: paragraph14, children: "To resolve this issue, please consider the following steps:" }),
    /* @__PURE__ */ jsx17(Section14, { children: /* @__PURE__ */ jsxs16("ol", { children: [
      /* @__PURE__ */ jsx17("li", { children: /* @__PURE__ */ jsx17(Text16, { style: paragraph14, children: "Verify the recipient\u2019s phone number." }) }),
      /* @__PURE__ */ jsx17("li", { children: /* @__PURE__ */ jsx17(Text16, { style: paragraph14, children: "Confirm the recipient has an active WhatsApp account." }) }),
      /* @__PURE__ */ jsx17("li", { children: /* @__PURE__ */ jsx17(Text16, { style: paragraph14, children: "Check for any issues with the message content" }) }),
      /* @__PURE__ */ jsx17("li", { children: /* @__PURE__ */ jsx17(Text16, { style: paragraph14, children: "Attempt to resend the message after ensuring the above." }) })
    ] }) }),
    /* @__PURE__ */ jsxs16(Text16, { style: paragraph14, children: [
      "If you require additional assistance, please refer to our support documentation or contact our support team at",
      " ",
      /* @__PURE__ */ jsx17(Link13, { href: "mailto:info@kwic.in", children: " info@kwic.in " }),
      "."
    ] }),
    /* @__PURE__ */ jsx17(Text16, { style: paragraph14, children: "We apologize for any inconvenience this may have caused." }),
    /* @__PURE__ */ jsxs16(Text16, { style: paragraph14, children: [
      "Best regards,",
      /* @__PURE__ */ jsx17("br", {}),
      "The Kwic team"
    ] })
  ] }) })
] });
MessageFailedEmail.PreviewProps = {
  userFirstname: "Alan"
};
var Message_failed_default = MessageFailedEmail;
var main13 = {
  maxWidth: "600px",
  margin: "0 auto",
  fontfamily: "Arial, sans-serif",
  lineheight: "1.6",
  Color: "#333333"
};
var container14 = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
var logo13 = {
  margin: "0 auto",
  width: "200px",
  height: "auto"
};
var paragraph14 = {
  fontSize: "16px",
  lineHeight: "26px"
};

// src/Usage-alert.tsx
import {
  Body as Body17,
  Button as Button14,
  Container as Container17,
  Head as Head17,
  Html as Html18,
  Img as Img17,
  Preview as Preview17,
  Section as Section15,
  Text as Text17
} from "@react-email/components";
import { jsx as jsx18, jsxs as jsxs17 } from "react/jsx-runtime";
var UsageAlertEmail = ({
  userFirstname,
  url
}) => /* @__PURE__ */ jsxs17(Html18, { children: [
  /* @__PURE__ */ jsx18(Head17, {}),
  /* @__PURE__ */ jsx18(Preview17, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx18(Body17, { style: main14, children: /* @__PURE__ */ jsxs17(Container17, { style: container15, children: [
    /* @__PURE__ */ jsx18(
      Img17,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        alt: "Koala",
        style: logo14
      }
    ),
    /* @__PURE__ */ jsxs17(Text17, { style: paragraph15, children: [
      "Dear ",
      userFirstname,
      ","
    ] }),
    /* @__PURE__ */ jsx18(Text17, { style: paragraph15, children: "We are notifying you that your usage of the Kwic Business WhatsApp API has exceeded the limit for your current plan." }),
    /* @__PURE__ */ jsxs17(Text17, { style: paragraph15, children: [
      /* @__PURE__ */ jsx18("strong", { children: "Exceeded Limit: " }),
      "Your ",
      /* @__PURE__ */ jsx18("strong", { children: "Growth plan" }),
      " allows for",
      " ",
      /* @__PURE__ */ jsx18("strong", { children: "5 conversations per month" }),
      " , and you have reached",
      " ",
      /* @__PURE__ */ jsx18("strong", { children: "98%" }),
      "conversations."
    ] }),
    /* @__PURE__ */ jsx18(Text17, { style: paragraph15, children: "To maintain uninterrupted service, we recommend:" }),
    /* @__PURE__ */ jsx18(Section15, { children: /* @__PURE__ */ jsxs17("ol", { children: [
      /* @__PURE__ */ jsx18("li", { children: /* @__PURE__ */ jsx18(Text17, { style: paragraph15, children: "Upgrading to a higher plan that fits your usage needs." }) }),
      /* @__PURE__ */ jsx18("li", { children: /* @__PURE__ */ jsx18(Text17, { style: paragraph15, children: "Reviewing your conversation strategies to optimize usage." }) })
    ] }) }),
    /* @__PURE__ */ jsxs17(Text17, { style: paragraph15, children: [
      "To upgrade your plan or for assistance, please visit",
      " ",
      /* @__PURE__ */ jsx18(Button14, { style: button5, href: "https://app.kwic.in/auth/login", children: "Kwic Login" })
    ] }),
    /* @__PURE__ */ jsx18(Text17, { style: paragraph15, children: "Thank you for your attention to this important matter." }),
    /* @__PURE__ */ jsxs17(Text17, { style: paragraph15, children: [
      "Best regards,",
      /* @__PURE__ */ jsx18("br", {}),
      "The Kwic team"
    ] })
  ] }) })
] });
UsageAlertEmail.PreviewProps = {
  userFirstname: "Alan"
};
var Usage_alert_default = UsageAlertEmail;
var main14 = {
  maxWidth: "600px",
  margin: "0 auto",
  fontfamily: "Arial, sans-serif",
  lineheight: "1.6",
  Color: "#333333"
};
var container15 = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
var logo14 = {
  margin: "0 auto",
  width: "200px",
  height: "auto"
};
var paragraph15 = {
  fontSize: "16px",
  lineHeight: "26px"
};
var button5 = {
  display: "block",
  padding: "12px 24px",
  backgroundColor: "#007bff",
  color: "#ffffff",
  textDecoration: "none",
  borderRadius: "4px",
  margin: "20px 0",
  textAlign: "center"
};

// src/Update.tsx
import {
  Body as Body18,
  Container as Container18,
  Head as Head18,
  Html as Html19,
  Img as Img18,
  Link as Link14,
  Preview as Preview18,
  Section as Section16,
  Text as Text18
} from "@react-email/components";
import { jsx as jsx19, jsxs as jsxs18 } from "react/jsx-runtime";
var UpdateFeatureEmail = ({
  userFirstname,
  url
}) => /* @__PURE__ */ jsxs18(Html19, { children: [
  /* @__PURE__ */ jsx19(Head18, {}),
  /* @__PURE__ */ jsx19(Preview18, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx19(Body18, { style: main15, children: /* @__PURE__ */ jsxs18(Container18, { style: container16, children: [
    /* @__PURE__ */ jsx19(
      Img18,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        alt: "Koala",
        style: logo15
      }
    ),
    /* @__PURE__ */ jsxs18(Text18, { style: paragraph16, children: [
      "Dear ",
      userFirstname,
      ","
    ] }),
    /* @__PURE__ */ jsx19(Text18, { style: paragraph16, children: "We are excited to announce the release of a new feature for the Kwic Business WhatsApp API: Enhanced Reporting Tools." }),
    /* @__PURE__ */ jsx19(Text18, { style: paragraph16, children: /* @__PURE__ */ jsx19("strong", { children: "Feature Highlights: " }) }),
    /* @__PURE__ */ jsx19(Section16, { children: /* @__PURE__ */ jsxs18("ul", { children: [
      /* @__PURE__ */ jsx19("li", { children: /* @__PURE__ */ jsxs18(Text18, { style: paragraph16, children: [
        /* @__PURE__ */ jsx19("strong", { children: "WhatsApp Flows: " }),
        "Engage Customers with WhatsApp Flows"
      ] }) }),
      /* @__PURE__ */ jsx19("li", { children: /* @__PURE__ */ jsxs18(Text18, { style: paragraph16, children: [
        /* @__PURE__ */ jsx19("strong", { children: "WhatsApp Business API: " }),
        "Connect with Customers on WhatsApp"
      ] }) }),
      /* @__PURE__ */ jsx19("li", { children: /* @__PURE__ */ jsxs18(Text18, { style: paragraph16, children: [
        /* @__PURE__ */ jsx19("strong", { children: "WhatsApp Chatbot: " }),
        "Scales Customer Experience , Not Team Size"
      ] }) }),
      /* @__PURE__ */ jsx19("li", { children: /* @__PURE__ */ jsxs18(Text18, { style: paragraph16, children: [
        /* @__PURE__ */ jsx19("strong", { children: "WhatsApp Boardcast: " }),
        "Launch Scalable Marketing Campaignse"
      ] }) }),
      /* @__PURE__ */ jsx19("li", { children: /* @__PURE__ */ jsxs18(Text18, { style: paragraph16, children: [
        /* @__PURE__ */ jsx19("strong", { children: "WhatsApp Shop: " }),
        "Quickly Set up and Sell on WhatsApp"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx19(Text18, { style: paragraph16, children: "Explore this new feature today and experience improved performance and control." }),
    /* @__PURE__ */ jsxs18(Text18, { style: paragraph16, children: [
      "For more information, visit",
      /* @__PURE__ */ jsx19(Link14, { href: "https://www.kwic.in/", children: " Kwic web site\u{1F448}" })
    ] }),
    /* @__PURE__ */ jsxs18(Text18, { style: paragraph16, children: [
      "Best regards,",
      /* @__PURE__ */ jsx19("br", {}),
      "The Kwic team"
    ] })
  ] }) })
] });
UpdateFeatureEmail.PreviewProps = {
  userFirstname: "Alan"
};
var Update_default = UpdateFeatureEmail;
var main15 = {
  maxWidth: "600px",
  margin: "0 auto",
  fontfamily: "Arial, sans-serif",
  lineheight: "1.6",
  Color: "#333333"
};
var container16 = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
var logo15 = {
  margin: "0 auto",
  width: "200px",
  height: "auto"
};
var paragraph16 = {
  fontSize: "16px",
  lineHeight: "26px"
};

// src/CancellationAccount.tsx
import {
  Body as Body19,
  Button as Button16,
  Container as Container19,
  Head as Head19,
  Html as Html20,
  Img as Img19,
  Link as Link15,
  Preview as Preview19,
  Section as Section17,
  Text as Text19
} from "@react-email/components";
import { jsx as jsx20, jsxs as jsxs19 } from "react/jsx-runtime";
var CancellationEmail = ({
  userFirstname,
  url
}) => /* @__PURE__ */ jsxs19(Html20, { children: [
  /* @__PURE__ */ jsx20(Head19, {}),
  /* @__PURE__ */ jsx20(Preview19, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx20(Body19, { style: main16, children: /* @__PURE__ */ jsxs19(Container19, { style: container17, children: [
    /* @__PURE__ */ jsx20(
      Img19,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        alt: "Koala",
        style: logo16
      }
    ),
    /* @__PURE__ */ jsxs19(Text19, { style: paragraph17, children: [
      "Dear ",
      userFirstname,
      ","
    ] }),
    /* @__PURE__ */ jsx20(Text19, { style: paragraph17, children: "This is to confirm that your Kwic Business WhatsApp API account has been successfully deactivated as per your request." }),
    /* @__PURE__ */ jsx20(Text19, { style: paragraph17, children: /* @__PURE__ */ jsx20("strong", { children: "Cancellation Details: " }) }),
    /* @__PURE__ */ jsx20(Section17, { children: /* @__PURE__ */ jsxs19("ul", { children: [
      /* @__PURE__ */ jsx20("li", { children: /* @__PURE__ */ jsxs19(Text19, { style: paragraph17, children: [
        /* @__PURE__ */ jsx20("strong", { children: "Account Number: " }),
        "91+ 9382982832",
        " "
      ] }) }),
      /* @__PURE__ */ jsx20("li", { children: /* @__PURE__ */ jsxs19(Text19, { style: paragraph17, children: [
        /* @__PURE__ */ jsx20("strong", { children: "Deactivation Date: " }),
        "15-NOV-2024"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx20(Text19, { style: paragraph17, children: "We value your feedback and would greatly appreciate it if you could share your reasons for canceling your account. Your input helps us improve our services." }),
    /* @__PURE__ */ jsx20(Text19, { style: paragraph17, children: /* @__PURE__ */ jsx20(Link15, { href: "https://www.kwic.in/", children: " \u{1F449} Feedback Link" }) }),
    /* @__PURE__ */ jsx20(Text19, { style: paragraph17, children: "If you wish to reactivate your account or have any questions, please contact our support team at." }),
    /* @__PURE__ */ jsx20(Button16, { style: button6, children: "Get Start" }),
    /* @__PURE__ */ jsxs19(Text19, { style: paragraph17, children: [
      "Best regards,",
      /* @__PURE__ */ jsx20("br", {}),
      "The Kwic team"
    ] })
  ] }) })
] });
CancellationEmail.PreviewProps = {
  userFirstname: "Alan"
};
var CancellationAccount_default = CancellationEmail;
var main16 = {
  maxWidth: "600px",
  margin: "0 auto",
  fontfamily: "Arial, sans-serif",
  lineheight: "1.6",
  Color: "#333333"
};
var container17 = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
var logo16 = {
  margin: "0 auto",
  width: "200px",
  height: "auto"
};
var paragraph17 = {
  fontSize: "16px",
  lineHeight: "26px"
};
var button6 = {
  display: "block",
  padding: "12px 24px",
  backgroundColor: "#007bff",
  color: "#ffffff",
  textDecoration: "none",
  borderRadius: "4px",
  margin: "20px 0",
  textAlign: "center"
};

// src/Feedback.tsx
import {
  Body as Body20,
  Container as Container20,
  Head as Head20,
  Html as Html21,
  Img as Img20,
  Link as Link16,
  Preview as Preview20,
  Text as Text20
} from "@react-email/components";
import { jsx as jsx21, jsxs as jsxs20 } from "react/jsx-runtime";
var FeedBackEmail = ({ userFirstname, url }) => /* @__PURE__ */ jsxs20(Html21, { children: [
  /* @__PURE__ */ jsx21(Head20, {}),
  /* @__PURE__ */ jsx21(Preview20, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx21(Body20, { style: main17, children: /* @__PURE__ */ jsxs20(Container20, { style: container18, children: [
    /* @__PURE__ */ jsx21(
      Img20,
      {
        src: `https://www.kwic.in/_next/image?url=%2Fassets%2Fkwic-logo.png&w=1920&q=100`,
        alt: "Koala",
        style: logo17
      }
    ),
    /* @__PURE__ */ jsxs20(Text20, { style: paragraph18, children: [
      "Dear ",
      userFirstname,
      ","
    ] }),
    /* @__PURE__ */ jsx21(Text20, { style: paragraph18, children: "At Kwic Business WhatsApp API, we\u2019re always striving to improve our services. Your feedback helps us understand what we\u2019re doing well and what we can improve." }),
    /* @__PURE__ */ jsx21(Text20, { style: paragraph18, children: "Could you share your thoughts about your recent experience with our WhatsApp API service? We value your opinion and appreciate your time." }),
    /* @__PURE__ */ jsx21(Text20, { style: paragraph18, children: /* @__PURE__ */ jsx21(Link16, { href: "#", children: "Feedback Link \u{1F448}" }) }),
    /* @__PURE__ */ jsx21(Text20, { style: paragraph18, children: "Thank you for helping us grow and improve!" }),
    /* @__PURE__ */ jsxs20(Text20, { style: paragraph18, children: [
      "Warmest regards,",
      /* @__PURE__ */ jsx21("br", {}),
      "The Kwic team"
    ] })
  ] }) })
] });
FeedBackEmail.PreviewProps = {
  userFirstname: "Alan"
};
var Feedback_default = FeedBackEmail;
var main17 = {
  maxWidth: "600px",
  margin: "0 auto",
  fontfamily: "Arial, sans-serif",
  lineheight: "1.6",
  Color: "#333333"
};
var container18 = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
var logo17 = {
  margin: "0 auto",
  width: "200px",
  height: "auto"
};
var paragraph18 = {
  fontSize: "16px",
  lineHeight: "26px"
};
export {
  API_Connection_default as APIConnectionEmail,
  API_Disconnection_default as APIDisconnectionEmail,
  CancellationAccount_default as CancellationEmail,
  change_email_default as ChangeEmail,
  Email,
  Feedback_default as FeedBackEmail,
  KoalaWelcomeEmail,
  login_alert_default as LoginAlertEmail,
  Message_failed_default as MessageFailedEmail,
  opt_default as OTPEmail,
  OTP_verification_default as OTPVerificationEmail,
  Onboarding_Email_default as Onboarding_WelcomeEmail,
  payment_failed_default as PaymentFailedEmail,
  payment_success_default as PaymentSuccessEmail,
  promoting_default as PromotingEmail,
  subscription_renewal_default as SubscriptionRenewalEmail,
  Update_default as UpdateFeatureEmail,
  Usage_alert_default as UsageAlertEmail,
  welcome_2_default as Welcome2Email,
  welcome_kwic_default as WelcomeEmail,
  password_reset_default as passwordresetEmail
};
