<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Use TanStack file routes for every public content page, with shared hospitality layouts and sections in src/components; this keeps navigation and page metadata consistent.
- Keep business content, sample room rates, image references, and the optional HTTPS booking widget URL in src/lib/guesthouse.ts so the template has one editable source.
- Public contact and newsletter forms insert through the generated Cloud client with insert-only RLS policies and database constraints; visitor data must never be publicly readable.
- Booking requests are inquiries, not confirmed reservations; only show a third-party booking iframe when the owner's genuine provider embed URL is configured.
