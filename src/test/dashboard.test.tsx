import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
// import { act } from 'react-dom/test-utils';

import Dashboard from '../components/Dashboard';

describe("Dashboard test", () => {
    const { ResizeObserver } = window;

    beforeEach(() => {
        // delete window.ResizeObserver;
        window.ResizeObserver = vi.fn().mockImplementation(() => ({
            observe: vi.fn(),
            unobserve: vi.fn(),
            disconnect: vi.fn()
        }));
        render(<Dashboard />)

    });

    afterEach(() => {
        window.ResizeObserver = ResizeObserver;
        vi.restoreAllMocks();
    });

    test('should render some content', async () => {
        expect(screen.getByText('Check out your dashboard summary.')).toBeDefined();
    });

    test("should display the graph skeleton", () => {
        expect(screen.getByTestId('graphDataSkeletonTest')).toBeInTheDocument();
    })

    test("should display the location pie chart skeleton", () => {
        expect(screen.getByTestId('locationsPieSkeletonTest')).toBeInTheDocument();
    })

    test("should display the sources pie chart skeleton", () => {
        expect(screen.getByTestId('sourcesPieSkeletonTest')).toBeInTheDocument();
    })

})
