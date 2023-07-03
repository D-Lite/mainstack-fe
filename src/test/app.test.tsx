import React from "react";
import { afterEach, beforeEach, describe, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import { ThemeWrapper } from "./util";

import App from "../App";

describe("<App />", () => {

    const { ResizeObserver } = window;

    beforeEach(() => {
        window.ResizeObserver = vi.fn().mockImplementation(() => ({
            observe: vi.fn(),
            unobserve: vi.fn(),
            disconnect: vi.fn()
        }));

        render(<App />, { wrapper: ThemeWrapper });

    });

    afterEach(() => {
        window.ResizeObserver = ResizeObserver;
        vi.restoreAllMocks();
    });

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    test("Theme Provider test", () => {
    });
});