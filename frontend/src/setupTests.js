// src/setupTests.js
import '@testing-library/jest-dom'
import matchers from '@testing-library/jest-dom/matchers'
import { expect } from 'vitest'

// Étend les matchers de jest-dom à Vitest
expect.extend(matchers)
