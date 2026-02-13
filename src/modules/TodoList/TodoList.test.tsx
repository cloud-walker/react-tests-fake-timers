import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { Suspense } from 'react'
import { expect, test } from 'vitest'
import { TodoList } from './TodoList'

test('suspense', async () => {
  render(<QueryClientProvider client={new QueryClient()}>
    <Suspense fallback={<div>Loading...</div>}>
      <TodoList />
    </Suspense>
  </QueryClientProvider>)
  await waitForElementToBeRemoved(() => screen.getAllByText('Loading...'))
  expect(screen.getByRole('list')).toBeInTheDocument()
})