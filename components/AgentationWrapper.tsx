"use client";

import { Agentation } from "agentation";

export default function AgentationWrapper() {
    // Only render in development mode
    if (process.env.NODE_ENV !== "development") {
        return null;
    }

    return <Agentation />;
}
