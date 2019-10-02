import React from 'react'

const OperationLog = ({ operationLog }) => {
  console.info('operationLog', operationLog)
  return (
    <tr>
      <td>{operationLog.description}</td>
      <td>{operationLog.operatedAt}</td>
    </tr>
  )
}

export default OperationLog