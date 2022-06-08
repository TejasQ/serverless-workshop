# The Project

[Stripe Home](https://stripe.com/blog/stripe-home) is an amazing portal for companies to organize themselves and know their people. Let's build an open-source version of this using Xata for companies and families to use.

## The Stack

- UI: React and Next.js
- Styles: TailwindCSS
- API: Next.js + [Xata](https://xata.io) SDK
- Authentication: next-auth
- Data storage: [Xata](https://xata.io)

## The Serverless Providers

- Hosting: Vercel
- Datastore: Xata

## Let's Also Talk About

- Log drains and debugging
- How Next.js is _serverless_
- CloudFlare workers vs. Vercel Edge Functions

## Feature Set

Here are the features we'll implement. We don't have to do all of them, but we do what has the greatest learning potential.

### The Basics

- [ ] Sign up/Login
- [ ] Set user profile
- [ ] Manage teams
- [ ] Assign user to team

### The Productive

- [ ] Meeting notes archive
- [ ] Team index
- [ ] Recordings archive
- [ ] Announcements board

### The Fun

- [ ] Quiz game (who is this?)
- [ ] New people who joined
- [ ] Birthday calendar
- [ ] Dark mode

### The Complex

- [ ] Social wall where teammates can draw (like r/place)
- [ ] Home calendar <-> Google calendar sync
- [ ] Slack/Twitter firehose
- [ ] Datadog/NewRelic/other dashboard widgets
