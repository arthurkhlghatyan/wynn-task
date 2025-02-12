import { sen } from '@/fonts'

export function TermsText() {
  return (
    <span className={`${sen.className} text-xs sm:text-base`}>
      I agree to the{" "}
      <a target='_blank' href='https://example.com/terms-and-conditions' referrerPolicy='no-referrer-when-downgrade' className='underline text-brown'>
        terms and conditions
      </a>{" "}
      and{" "}
      <a target='_blank' href='https://example.com/terms-and-conditions' referrerPolicy='no-referrer-when-downgrade' className='underline text-brown'>
        privacy policy
      </a>
      .
    </span>
  );
}