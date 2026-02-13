import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach, vi } from "vitest";

beforeEach(() => {
	vi.stubGlobal("jest", {
		advanceTimersByTime: vi.advanceTimersByTime.bind(vi),
	});
	vi.useFakeTimers();
});

afterEach(() => {
	vi.runOnlyPendingTimers();
	vi.useRealTimers();
	cleanup();
});
