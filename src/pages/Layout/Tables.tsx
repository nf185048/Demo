import React from 'react'
import type { FC } from 'react'
import { Table } from '@ncr-design-system/react'

export const TableExample: FC<{}> = () => {
  return (
    <div>
      <p>Tables</p>
      <Table variant='border' density='compact'>
        <Table head>
          <Table header>First Name</Table>
          <Table header>Last Name</Table>
          <Table header>Company</Table>
          <Table header>Address</Table>
        </Table>
        <Table body>
          <Table row>
            <Table cell>Fred</Table>
            <Table cell>Jackson</Table>
            <Table cell>Acme, Inc</Table>
            <Table cell>123 Broad St</Table>
          </Table>
          <Table row>
            <Table cell>Fred</Table>
            <Table cell>Jackson</Table>
            <Table cell>Acme, Inc</Table>
            <Table cell>123 Broad St</Table>
          </Table>
          <Table row>
            <Table cell>Fred</Table>
            <Table cell>Jackson</Table>
            <Table cell>Acme, Inc</Table>
            <Table cell>123 Broad St</Table>
          </Table>
          <Table row>
            <Table cell>Fred</Table>
            <Table cell>Jackson</Table>
            <Table cell>Acme, Inc</Table>
            <Table cell>123 Broad St</Table>
          </Table>
        </Table>
      </Table>
    </div>
  )
}
