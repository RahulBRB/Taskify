import React from "react";
import "./globals.css";

export const metadata = {
  title: "Taskify - AI Task Management",
  description: "AI-powered task management for teams and individuals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
