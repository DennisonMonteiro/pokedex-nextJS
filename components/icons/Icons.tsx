import { ReactElement } from 'react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Icons(): ReactElement {
  return <FontAwesomeIcon icon={ faCoffee } />
}