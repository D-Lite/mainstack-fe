import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";


import { ThemeWrapper } from "./util";

import Sidebar from "../components/Sidebar";

describe("<Sidebar />", () => {

    const { ResizeObserver } = window;
    const img = HTMLImageElement;

    beforeEach(() => {
        window.ResizeObserver = vi.fn().mockImplementation(() => ({
            observe: vi.fn(),
            unobserve: vi.fn(),
            disconnect: vi.fn()
        }));

        render(<Sidebar onClose />, { wrapper: ThemeWrapper });

    });

    afterEach(() => {
        window.ResizeObserver = ResizeObserver;
        vi.restoreAllMocks();
    });

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    test("renders sidebar properly", () => {
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });

    // TEST to check if logo is rendered
    test("renders logo properly", () => {
        expect(screen.getAllByRole('img')[0]).toHaveAttribute('src', '/src/assets/mainstack.svg');

    })
});