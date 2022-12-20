import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
<h2 className="common-heading">Contact Us</h2>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.4844216479687!2d75.10935601526491!3d15.350229262379978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d6b7e332ec53%3A0xbda67d3ddd362ec7!2sUrban%20Oasis%20Mall!5e0!3m2!1sen!2sin!4v1667365017848!5m2!1sen!2sin" 
title="map"
width="100%" 
height="400" 
style={{border:0}}
allowFullScreen="" 
loading="lazy" 
referrerPolicy="no-referrer-when-downgrade"></iframe>

<div className="container">
<div className="contact-form">
  <form action="https://formspree.io/f/xoqbplzk" method="POST" className="contact-inputs">
    <input type="text" name="username" placeholder="Enter Your Username" required autoComplete="off"></input>
    <input type="text" name="email" placeholder="Enter Your Email" required autoComplete="off"></input>
    <textarea name="message" rows="10" cols="30" placeholder="Enter Your Message" required autoComplete="off"></textarea>
    <input type="submit" value="send"/>
  </form>
  </div>
</div>

  </Wrapper>;
};

export default Contact;
