import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Topbar from '../components/Topbar';


describe("Dashboard test", () => {
    test('should render the word dashboard', async () => {
        render(<Topbar />)

        expect(screen.getByText('Dashboard')).toBeDefined();
    });
})
