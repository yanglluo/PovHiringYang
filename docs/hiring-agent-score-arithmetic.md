# Deterministic score arithmetic: a small refactor with a large testing payoff

While reviewing the [InterviewStreet hiring-agent](https://github.com/interviewstreet/hiring-agent) codebase, I found that the CLI calculated category caps, bonus points, deductions, and the overall maximum inline in the command path. That made the arithmetic difficult to test independently.

## Refactor

I prepared a small, dependency-light change:

- Extract the arithmetic into a pure `calculate_total_score` helper.
- Keep category scores capped at each category's declared maximum.
- Apply bonus points and deductions in one deterministic path.
- Preserve the CLI's warning behavior when a category or total is capped.
- Add regression tests using the existing Pydantic `EvaluationData` model.

The helper returns the total score, category maximum, capped category values, and whether the overall maximum was applied. Keeping those values explicit makes the scoring contract easier to inspect and prevents future changes in the CLI from silently changing the result.

## Verification

The patch was verified with the Python standard library test runner:

```text
python -m unittest -v test_scoring.py
Ran 3 tests — OK

python -m py_compile scoring.py test_scoring.py score.py
PASS
```

The tests cover:

1. Category scores plus bonus points minus deductions.
2. Capping an individual category before adding it to the total.
3. The declared maximum-score boundary.

## Contribution status

This note documents a tested, submission-ready patch. It is not an upstream pull request or merged contribution. The upstream repository currently grants my connected GitHub account pull access but not push access, so a fork is required before submission.

