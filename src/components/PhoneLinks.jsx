import { Fragment } from 'react'
import { site, telHref } from '../data/site.js'

// Los teléfonos en una línea, «número / número», cada uno con su enlace para llamar.
export default function PhoneLinks({ className }) {
  return site.phones.map((phone, index) => (
    <Fragment key={phone}>
      {index > 0 && ' / '}
      <a href={telHref(phone)} className={className}>
        {phone}
      </a>
    </Fragment>
  ))
}
